"use client";
import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import { Button } from "../ui";

const Form = () => {
  const [showform, setShowform] = useState(true);
  const [email, setEmail] = useState("");
  const nameField = React.useRef(null);
  const handleSubmit = () => {
    if (nameField.current.value !== "") {
      setShowform(false);
      setEmail(nameField.current.value);
    }
  };
  return (
    <>
      {showform ? (
        <>
          <div className={styles.h1}>Подпишись на рассылку</div>
          <div className={styles.pageFooter__zink}>
            Будь в&nbsp;курсе всех новостей и&nbsp;акций в&nbsp;магазинах Дикси
          </div>
          <div className={styles.subscribe}>
            <div className={styles.subscribe__input}>
              <input
                name="email"
                type="email"
                placeholder="Ваш e-mail"
                ref={nameField}
                required
              />
            </div>
            <div className={styles.subscribe__submit}>
              <Button
                onClick={() => {
                  handleSubmit();
                }}
              >
                подписаться
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.sended}>
          Ваш email <b>{email}</b> успешно подписан на рассылку! <br /> (Шутка,
          не подписан)
        </div>
      )}
    </>
  );
};

export default Form;
