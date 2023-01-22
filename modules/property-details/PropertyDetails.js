import {
  AccountLabel, AccountList, AccountListItem, AccountSection, InfoText
} from "./style";
import RowContainer from "../../components/RowContainer"

const PropertyDetails = ({account}) => (
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

export default PropertyDetails