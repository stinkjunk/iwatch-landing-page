import { DiApple } from "react-icons/di";

const HeaderComponent = () => {
  return (
    <header>
      <div className="menubar">
        <DiApple></DiApple>
        <ul className="menu">
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
