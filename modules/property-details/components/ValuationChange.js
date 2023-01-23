import Badge from "../../../components/Badge"
import { format } from "date-fns";
import {
  AccountLabel, AccountList, AccountListItem, AccountSection, InfoText
} from "../style";
import formatPrice from "../../../utils/formatPrice"
import RowContainer from "../../../components/RowContainer";
import yearsSincePurchase from "../../../utils/yearsSincePurchase";
import PropTypes from "prop-types";

const ValuationChange =({account}) => {
  const purchaseDate = new Date(account.originalPurchasePriceDate);
  const valueChange = account.recentValuation.amount - account.originalPurchasePrice
  const valueChangePercentage = (valueChange / account.originalPurchasePrice) * 100
  const annualAppreciation = valueChangePercentage / yearsSincePurchase(purchaseDate)
  const roundedAnnualAppreciation = Math.round(annualAppreciation * 10) / 10
  
  return (
    <>
      <AccountSection>
        <AccountLabel>Valuation Change</AccountLabel>
        <RowContainer>
          <AccountList>
            <AccountListItem>
              <InfoText>
                Purchased for <span>{formatPrice(account.originalPurchasePrice)}</span> in {format(purchaseDate, "MMMM yyyy")}
              </InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>Since purchase</InfoText>
              <Badge color={valueChange < 0 ? 'red' : undefined}>
                {`${valueChange < 0 ? '-' : ''}${formatPrice(valueChange)} (${valueChangePercentage}%)`}
              </Badge>
            </AccountListItem>
            {annualAppreciation ? (
              <AccountListItem>
                <InfoText>Annual appreciation</InfoText>
                <Badge color={annualAppreciation < 0 ? 'red' : undefined}>{`${roundedAnnualAppreciation}%`}</Badge>
              </AccountListItem>
            ) : null}        
          </AccountList>
        </RowContainer>
      </AccountSection>
    </>
  )
}

ValuationChange.propTypes = {
  account: PropTypes.object
}

export default ValuationChange