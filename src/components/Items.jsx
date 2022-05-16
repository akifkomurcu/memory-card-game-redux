/* eslint-disable no-const-assign */
import { useState } from "react";
import { setCards, setTrue } from "../redux/CardSlice";
import { useSelector, useDispatch } from "react-redux";
import cardData from "../cardData.json";

import style from "./style.module.css";

function Items() {
  const dispatch = useDispatch();
  const [original, setOriginal] = useState(cardData);
  const cards = useSelector((state) => state.card.cards);
  const result = useSelector((state) => state.card.result);
  const correctCards = useSelector((state) => state.card.correctCards);
  const compareCards = useSelector((state) => state.card.compareCards);

  const isClicked = (id, title) => {
    dispatch(setCards({ id: id, flipIt: true, value: title }));
  };
  return (
    <>
      <div className={style.container}>
        {original.map((card, index) => (
          <div className={style.cardLocation} key={index}>
            {
              <div
                className={
                  compareCards.some((item) => item.id === card.id)
                    ? compareCards.length > 0
                      ? style.cardsTouched
                      : style.cards
                    : style.cards &&
                      correctCards.some(
                        (correctCards) => correctCards.value === card.title
                      )
                    ? style.cardsTouched
                    : style.cards
                }
                key={index}
                onClick={() => isClicked(card.id, card.title)}
                value={card.id}
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
            }
          </div>
        ))}
        <h1>Puan {result}</h1>
      </div>
    </>
  );
}

export default Items;
