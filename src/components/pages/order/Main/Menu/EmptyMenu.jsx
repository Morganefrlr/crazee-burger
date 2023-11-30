import React, { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";

const EmptyMenu = () => {
  const { adminMode } = useContext(AdminContext);
  return (
    <>
      {adminMode && (
        <div>
          <p>Le menu est vide?</p>
          <p>Cliquez ci-dessous pour le réinitialiser</p>
          <ButtonOrange />
        </div>
      )}
      {!adminMode && (
        <div>
          <p>Victime de notre succès! :D</p>
          <p>De nouvelles recettes sont en cours de préparation.</p>
          <p>À très vite!</p>
        </div>
      )}
    </>
  );
};

export default EmptyMenu;
