// import styles from "../../../../Pages/SignUp.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message as antMessage } from "antd";
import UserValidator from "../../../../Entites/Users/User.validator";
import UserApi from "../../../../Entites/Users/UserApi";
import Button from "../../../../Shared/lib/ui/Button/Button";
import { setAccessToken } from "../../../../Shared/lib/axiosInstance";

//NOTE Компонент формы аутентификации, принимает тип формы (вход или регистрация) и функцию установки пользователя
export default function AuthForm({ type, setUser }) {
  //* Состояние для хранения входных данных пользователя
  const [inputs, setInputs] = useState({
    email: "", //? Поле для хранения email
    password: "", //? Поле для хранения пароля
    name: type === "signUp" ? "" : undefined, //? Поле для хранения имени пользователя, если тип 'signUp'
    role: "",
  });

  //* Состояние для управления загрузкой
  const [loading, setLoading] = useState(false);

  //* Хук для навигации
  const navigate = useNavigate();

  //* Обработчик изменения ввода данных
  const changeHandler = ({ target }) => {
    //? Обновляем состояние с новыми значениями полей ввода
    setInputs((prev) => ({ ...prev, [target.name]: target.value }));
    
  };

  console.log(inputs);

  //* Основной обработчик отправки формы
  async function submitHandler(e) {
    e.preventDefault(); //! Предотвращаем стандартное поведение формы
    const { email, password, name, role } = inputs; //? Извлекаем значения из состояния
    setLoading(true); //* Устанавливаем состояние загрузки в true

    //* Нормализуем email, приводя его к нижнему регистру
    const normalizedEmail = email.toLowerCase();
    try {
      //? Проверяем, какой тип формы (вход или регистрация)
      if (type === "signIn") {
        //? Валидация введенных данных для входа
        const { isValid, error: validateError } = UserValidator.validateSignIn({
          email: normalizedEmail,
          password,
        });

        //! Если данные невалидны, отображаем ошибку
        if (!isValid) {
          antMessage.error(validateError);
          return;
        }

        //* Попытка выполнить вход через API
        const { statusCode, message, data, error } = await UserApi.signIn({
          email: normalizedEmail,
          password,
        });

        //! Если произошла ошибка, показываем сообщение об ошибке
        if (error) {
          antMessage.error(error);
          return;
        }
        //* Успешный вход, отображаем сообщение и обновляем данные пользователя
        antMessage.success(message);
        if (statusCode === 200) {
          setAccessToken(data.accessToken); //* Записываем токен в переменную
          setUser(data.user); //* Устанавливаем пользователя в состояние
          setInputs({ email: "", password: "" }); //* Сбрасываем поля ввода
          navigate("/"); //* редирект на главную
        }
      } else {
        //* Валидация введенных данных для регистрации
        const { isValid, error: validateError } = UserValidator.validateSignUp({
          email: normalizedEmail,
          name,
          password,
        });

        //! Если данные невалидны, отображаем ошибку
        if (!isValid) {
          antMessage.error(validateError);
          return;
        }

        //* Попытка выполнить регистрацию через API
        const { statusCode, message, data, error } = await UserApi.signUp({
          email: normalizedEmail,
          name,
          password,
          role,
        });

        //! Если произошла ошибка, показываем сообщение об ошибке
        if (error) {
          antMessage.error(error);
          return;
        }
        //* Успешная регистрация, отображаем сообщение и обновляем данные пользователя
        antMessage.success(message);
        if (statusCode === 201) {
          setAccessToken(data.accessToken); //* Записываем токен в переменную
          setUser(data.user); //* Устанавливаем пользователя в состояние
          setInputs({ email: "", password: "", name: "", role: "" }); //* Сбрасываем поля ввода
          navigate("/"); //* редирект на главную
        }
      }
    } catch (error) {
      //! Если произошла ошибка, отображаем сообщение об ошибке
      antMessage.error(error.message);
      console.log(error); //! Логируем ошибку в консоль для отладки
    } finally {
      //? В любом случае останавливаем индикатор загрузки
      setLoading(false);
    }
  }

  return (
    <>
      <h3>{type === "signIn" ? "Вход" : "Регистрация"}</h3>{" "}
      {/* Заголовок в зависимости от типа формы */}
      <form onSubmit={submitHandler}>
        {" "}
        {/* Обработчик отправки формы */}
        <input
          onChange={changeHandler} // Обработчик изменения для email
          type="email"
          name="email"
          value={inputs.email}
          placeholder="email" // Подсказка для поля email
          required
          autoFocus // Фокус на этом поле при загрузке формы
        />
        <input
          onChange={changeHandler} // Обработчик изменения для пароля
          type="password"
          name="password"
          value={inputs.password}
          placeholder="password" // Подсказка для поля пароля
          required
        />
        <fieldset>
          <legend>Выберите роль</legend>

          <div>
            <input
              type="radio"
              id="userChill"
              name="role"
              value="user"
              onChange={changeHandler}
            />
            <label for="userNormis">Юзер обыкновенный</label>
          </div>

          <div>
            <input
              type="radio"
              id="userMain"
              name="role"
              value="admin"
              onChange={changeHandler}
            />
            <label for="adminName">Админ</label>
          </div>
        </fieldset>
        {type === "signUp" && ( // Если форма регистрации
          <input
            onChange={changeHandler} // Обработчик изменения для имени пользователя
            name="name"
            value={inputs.name}
            placeholder="name" // Подсказка для поля имени пользователя
            required
          />
        )}
        {/* Кнопка отправки в зависимости от типа формы */}
        {type === "signIn" ? (
          <Button text="Вход" color="green" disabled={loading} type="submit" />
        ) : (
          <Button
            text="Регистрация"
            color="green"
            disabled={loading} // Блокируем кнопку при загрузке
            type="submit"
          />
        )}
      </form>
    </>
  );
}
