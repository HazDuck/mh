import { add, format } from "date-fns";
import {  
  AccountLabel, 
  AccountList, 
  AccountListItem, 
  AccountSection, 
  InfoText,
  AccountHeadline
} from "./style"
import formatPrice from "../../utils/formatPrice";

const Value = ({account}) => {
  const lastUpdate = new Date(account.lastUpdate)
  return (
    <AccountSection>
      <AccountLabel>Estimated Value</AccountLabel>
      <AccountHeadline>
        {formatPrice(account.recentValuation.amount)}
      </AccountHeadline>
      <AccountList>
        <AccountListItem><InfoText>
          Last updated {format(lastUpdate, "do MMM yyyy")}
        </InfoText></AccountListItem>
        <AccountListItem><InfoText>
          {`Next update ${format(
            add(lastUpdate, { days: account.updateAfterDays }),
            "do MMM yyyy"
          )}`}
        </InfoText></AccountListItem>
      </AccountList>
    </AccountSection>
  )
}

export default Value