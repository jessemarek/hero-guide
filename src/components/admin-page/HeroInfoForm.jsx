import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import { heroInfoForm, newHeroSubmission } from "../../state/adminFormState";

const HeroInfoForm = () => {
  const [formValues, setFormValues] = useRecoilState(heroInfoForm);
  const resetForm = useResetRecoilState(heroInfoForm);
  const newHeroData = useRecoilValue(newHeroSubmission);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(newHeroData);
    axiosWithAuth()
      .post("api/heroes", { hero: newHeroData })
      .then((res) => {
        console.log(res);
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Hero Info</h1>
      <form onSubmit={onSubmit}>
        <NameInputArea changeHandler={changeHandler} />
        <PositionInputArea changeHandler={changeHandler} />
        <RoleInputArea changeHandler={changeHandler} />
        <DescriptionInputArea
          formValues={formValues}
          changeHandler={changeHandler}
        />
        <FirstAppearedInputArea
          formValues={formValues}
          changeHandler={changeHandler}
        />
        <CardTypeInputArea changeHandler={changeHandler} />
        <ChestTypeInputArea changeHandler={changeHandler} />
        <AvailableInInputArea
          formValues={formValues}
          changeHandler={changeHandler}
        />
        <button className="submit-btn">Submit</button>
      </form>
    </>
  );
};

export default HeroInfoForm;

// Sub Form Components
const NameInputArea = ({ changeHandler }) => {
  const formValues = useRecoilValue(heroInfoForm);
  return (
    <div>
      <label>
        Name
        <input
          name="name"
          type="text"
          onChange={changeHandler}
          value={formValues.name}
          required
        />
      </label>
      <label>
        Title
        <input
          name="title"
          type="text"
          onChange={changeHandler}
          value={formValues.title}
          required
        />
      </label>
      <label>
        Quote
        <input
          name="quote"
          type="text"
          onChange={changeHandler}
          value={formValues.quote}
          required
        />
      </label>
    </div>
  );
};

const PositionInputArea = ({ changeHandler }) => {
  const formValues = useRecoilValue(heroInfoForm);
  return (
    <div>
      <p>Position</p>
      <label>
        <input
          name="position"
          type="radio"
          onChange={changeHandler}
          value="front"
          checked={formValues.position === "front"}
          required
        />{" "}
        Front
      </label>
      <label>
        <input
          name="position"
          type="radio"
          onChange={changeHandler}
          value="mid"
          checked={formValues.position === "mid"}
          required
        />{" "}
        Mid
      </label>
      <label>
        <input
          name="position"
          type="radio"
          onChange={changeHandler}
          value="back"
          checked={formValues.position === "back"}
          required
        />{" "}
        Back
      </label>
    </div>
  );
};

const RoleInputArea = ({ changeHandler }) => {
  const formValues = useRecoilValue(heroInfoForm);
  return (
    <div>
      <p>Role</p>
      <label>
        <input
          name="role"
          type="radio"
          onChange={changeHandler}
          value="Tank"
          checked={formValues.role === "Tank"}
          required
        />{" "}
        Tank
      </label>
      <label>
        <input
          name="role"
          type="radio"
          onChange={changeHandler}
          value="DPS"
          checked={formValues.role === "DPS"}
          required
        />{" "}
        DPS
      </label>
      <label>
        <input
          name="role"
          type="radio"
          onChange={changeHandler}
          value="Support"
          checked={formValues.role === "Support"}
          required
        />{" "}
        Support
      </label>
    </div>
  );
};

const DescriptionInputArea = ({ changeHandler }) => {
  const formValues = useRecoilValue(heroInfoForm);
  return (
    <div>
      <label>
        Description
        <textarea
          name="description"
          onChange={changeHandler}
          value={formValues.description}
          required
        />
      </label>
    </div>
  );
};

const FirstAppearedInputArea = ({ changeHandler }) => {
  const formValues = useRecoilValue(heroInfoForm);
  return (
    <div>
      <label>
        First Appeared
        <select
          name="first_appeared"
          onChange={changeHandler}
          value={formValues.first_appeared}
          required
        >
          <option disabled value="">
            -- Select --
          </option>
          <option value="original-hero">Original Hero</option>
          <option value="monthly-hero">Monthly Hero</option>
          <option value="conjuring-stone">Conjuring Stone</option>
          <option value="purchase-hero">Purchase Hero</option>
          <option value="hero-chest">Chest Event</option>
        </select>
      </label>
    </div>
  );
};

const CardTypeInputArea = ({ changeHandler }) => {
  const formValues = useRecoilValue(heroInfoForm);
  return (
    <div>
      <p>Card Type</p>
      <label>
        <input
          name="card_type"
          type="radio"
          onChange={changeHandler}
          value="1"
          checked={formValues.card_type === "1"}
          required
        />{" "}
        1 Star
      </label>
      <label>
        <input
          name="card_type"
          type="radio"
          onChange={changeHandler}
          value="2"
          checked={formValues.card_type === "2"}
          required
        />{" "}
        2 Star
      </label>
      <label>
        <input
          name="card_type"
          type="radio"
          onChange={changeHandler}
          value="3"
          checked={formValues.card_type === "3"}
          required
        />{" "}
        3 Star
      </label>
    </div>
  );
};

const ChestTypeInputArea = ({ changeHandler }) => {
  const formValues = useRecoilValue(heroInfoForm);
  return (
    <div>
      <p>Chest Type</p>
      <label>
        <input
          name="chest_type"
          type="radio"
          onChange={changeHandler}
          value="gold"
          checked={formValues.chest_type === "gold"}
          required
        />{" "}
        Gold
      </label>
      <label>
        <input
          name="chest_type"
          type="radio"
          onChange={changeHandler}
          value="diamond"
          checked={formValues.chest_type === "diamond"}
          required
        />{" "}
        Diamond
      </label>
    </div>
  );
};

const AvailableInInputArea = ({ changeHandler }) => {
  const formValues = useRecoilValue(heroInfoForm);
  return (
    <div>
      <label>
        Available In
        <select
          name="available_in"
          onChange={changeHandler}
          value={formValues.available_in}
          required
        >
          <option disabled value="">
            -- Select --
          </option>
          <option value="campaign">Campaign</option>
          <option value="arena">Arena Armory</option>
          <option value="epic-arena">Champion's Corner</option>
          <option value="crucible-of-fire">Crucible Supply Wagon</option>
          <option value="guild-hall">Guild Emporium</option>
          <option value="hall-of-legends">Legendary Shop</option>
          <option value="mystic-ruins">Mystic Ruins</option>
          <option value="not-released">Not Released</option>
        </select>
      </label>
    </div>
  );
};
