import RowContainer from "../../components/RowContainer";
import {  
  AccountLabel, 
  AccountList, 
  AccountListItem, 
  AccountSection, 
  InfoText
} from "./style"
import formatPrice from "../../utils/formatPrice";

const Mortgage = ({account}) => {
  const mortgage = account.associatedMortgages.length ? account.associatedMortgages[0] : null

  return (
    <>
      {mortgage ? (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <AccountListItem><InfoText>
                {formatPrice(account.associatedMortgages[0].currentBalance, true)}
              </InfoText></AccountListItem>
              <AccountListItem><InfoText>{account.associatedMortgages[0].name}</InfoText></AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
      ) : null }
    </>
  )
}

export default Mortgage