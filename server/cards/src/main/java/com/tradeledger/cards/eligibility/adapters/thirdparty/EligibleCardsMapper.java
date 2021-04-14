package com.tradeledger.cards.eligibility.adapters.thirdparty;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tradeledger.cards.eligibility.common.domain.EligibleCards;

import java.util.HashSet;

class EligibleCardsMapper {
    @JsonProperty("eligibleCards")
    HashSet<String> eligibleCards;

    EligibleCards toDomain() {
        return new EligibleCards(eligibleCards);
    }
}