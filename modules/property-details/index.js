import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../components/Button";
import ValuationChange from "./components/ValuationChange"
import PropertyDetails from "./components/PropertyDetails";
import PropertyValue from "./components/PropertyValue"
import Mortgage from "./components/Mortgage";
import {
  Inset,
} from "./style";


const Detail = ({accountData: {account}}) => {
  return (
    <Inset>
      <PropertyValue account={account}/>
      <PropertyDetails account={account}/>
      <ValuationChange account={account}/>
      <Mortgage account={account}/>
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
}

Detail.propTypes = {
  accountData: PropTypes.object
}

export default Detail;
