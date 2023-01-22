import {
  AccountLabel, AccountList, AccountListItem, AccountSection, InfoText
} from "./style";
import RowContainer from "../../components/RowContainer"
import PropTypes from "prop-types";

const PropertyDetails = ({account}) => {
  return (
    <AccountSection>
      <AccountLabel>Property details</AccountLabel>
      <RowContainer>
        <AccountList>
          <AccountListItem><InfoText>{account.name}</InfoText></AccountListItem>
          <AccountListItem><InfoText>{account.bankName}</InfoText></AccountListItem>
          <AccountListItem><InfoText>{account.postcode}</InfoText></AccountListItem>
        </AccountList>
      </RowContainer>
    </AccountSection>
  )

  PropertyDetails.propTypes = {
    account: PropTypes.object
  }
}

export default PropertyDetails