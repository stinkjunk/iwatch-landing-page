import { DiApple } from "react-icons/di";

const HeaderComponent = () => {
  return (
    <header>
      <div className="flex flex-row">
        <DiApple color="white" className="cursor-pointer"></DiApple>
        <ul className="flex flex-row">
          <a href="#">Mac</a>
          <a href="#">iPhone</a>
          <a href="#">iPad</a>
          <a href="#" className="active">
            iWatch
          </a>
          <a href="#">Support</a>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
