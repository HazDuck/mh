import React from "react";
import { Button } from "../../components/Button";
import {
  Inset,
} from "./style";
import ValuationChange from "./ValuationChange"
import PropertyDetails from "./PropertyDetails";
import Mortgage from "./Mortgage";
import PropertyValue from "./PropertyValue"
import PropTypes from "prop-types";

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
