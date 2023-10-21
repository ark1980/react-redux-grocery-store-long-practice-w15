import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProduceDetails from "./ProduceDetails";
import { loadProduce } from "../../store/produce";
import "./ProduceList.css";

function ProduceList() {
  const dispatch = useDispatch();

  const produceList = useSelector((state) => state.produce);
  const produceArr = Object.values(produceList);

  useEffect(() => {
    dispatch(loadProduce());
  }, [dispatch]);

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
