import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GETDATA } from "../graphql/query/allData";
import "./dashboard.css";

const Main = () => {
  const { data } = useQuery(GETDATA);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    if (data) {
      setCharts(
        Object.values(data?.dashboard).filter(
          (item) => typeof item === "object"
        )
      );
    }
  }, [data]);

  const getAllNumber = (active, inactive, completed) => {
    return active + inactive + completed;
  };

  const getRate = (active, inactive, completed) => {
    return Math.round((completed / (active + inactive + completed)) * 100);
  };

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

  const handleChangeFirst = (chart) => {
    setFirst(chart);
  };

  const handleChangeSecond = (chart) => {
    setSecond(chart);
  };

  const handleChangeThird = (chart) => {
    setThird(chart);
  };

  return (
    <div className="Main">
      <div className="title">Сводка</div>

      <div className="charts">
        <div className="oneChart">
          <div
            className="pie animate"
            style={{
              "--p": !first
                ? getRate(
                    charts[0]?.active,
                    charts[0]?.inactive,
                    charts[0]?.completed
                  )
                : first,
            }}
          >
            {!first
              ? getAllNumber(
                  charts[0]?.active,
                  charts[0]?.inactive,
                  charts[0]?.completed
                )
              : first}
          </div>

          <div>
            <div className="description">
              <button
                onClick={() =>
                  handleChangeFirst(
                    getAllNumber(
                      charts[0]?.active,
                      charts[0]?.inactive,
                      charts[0]?.completed
                    )
                  )
                }
              >
                Всего:{" "}
                <span className="value">
                  {getAllNumber(
                    charts[0]?.active,
                    charts[0]?.inactive,
                    charts[0]?.completed
                  )}
                </span>
              </button>
            </div>

            <div className="description">
              <button onClick={() => handleChangeFirst(charts[0]?.active)}>
                Активные: <span className="value">{charts[0]?.active}</span>
              </button>
            </div>

            <div className="description">
              <button onClick={() => handleChangeFirst(charts[0]?.inactive)}>
                Неактивные: <span className="value">{charts[0]?.inactive}</span>
              </button>
            </div>

            <div className="description">
              <button onClick={() => handleChangeFirst(charts[0]?.completed)}>
                Завершенные:{" "}
                <span className="value">{charts[0]?.completed}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="oneChart">
          <div
            className="pie animate"
            style={{
              "--p": !second
                ? getRate(
                    charts[1]?.active,
                    charts[1]?.inactive,
                    charts[1]?.completed
                  )
                : second,
            }}
          >
            {!second
              ? getAllNumber(
                  charts[1]?.active,
                  charts[1]?.inactive,
                  charts[1]?.completed
                )
              : second}
          </div>

          <div>
            <div className="description">
              <button
                onClick={() =>
                  handleChangeSecond(
                    getAllNumber(
                      charts[1]?.active,
                      charts[1]?.inactive,
                      charts[1]?.completed
                    )
                  )
                }
              >
                Всего:{" "}
                <span className="value">
                  {getAllNumber(
                    charts[1]?.active,
                    charts[1]?.inactive,
                    charts[1]?.completed
                  )}
                </span>
              </button>
            </div>

            <div className="description">
              <button onClick={() => handleChangeSecond(charts[1]?.active)}>
                Активные: <span className="value">{charts[1]?.active}</span>
              </button>
            </div>

            <div className="description">
              <button onClick={() => handleChangeSecond(charts[1]?.inactive)}>
                Неактивные: <span className="value">{charts[1]?.inactive}</span>
              </button>
            </div>

            <div className="description">
              <button onClick={() => handleChangeSecond(charts[1]?.completed)}>
                Завершенные:{" "}
                <span className="value">{charts[1]?.completed}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="oneChart">
          <div
            className="pie animate"
            style={{
              "--p": !third
                ? getRate(
                    charts[2]?.active,
                    charts[2]?.inactive,
                    charts[2]?.completed
                  )
                : third,
            }}
          >
            {!third
              ? getAllNumber(
                  charts[2]?.active,
                  charts[2]?.inactive,
                  charts[2]?.completed
                )
              : third}
          </div>

          <div>
            <div className="description">
              <button
                onClick={() =>
                  handleChangeThird(
                    getAllNumber(
                      charts[2]?.active,
                      charts[2]?.inactive,
                      charts[2]?.completed
                    )
                  )
                }
              >
                Всего:{" "}
                <span className="value">
                  {getAllNumber(
                    charts[2]?.active,
                    charts[2]?.inactive,
                    charts[2]?.completed
                  )}
                </span>
              </button>
            </div>

            <div className="description">
              <button onClick={() => handleChangeThird(charts[2]?.active)}>
                Активные: <span className="value">{charts[2]?.active}</span>
              </button>
            </div>

            <div className="description">
              <button onClick={() => handleChangeThird(charts[2]?.inactive)}>
                Неактивные: <span className="value">{charts[2]?.inactive}</span>
              </button>
            </div>

            <div className="description">
              <button onClick={() => handleChangeThird(charts[2]?.completed)}>
                Завершенные:{" "}
                <span className="value">{charts[2]?.completed}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
