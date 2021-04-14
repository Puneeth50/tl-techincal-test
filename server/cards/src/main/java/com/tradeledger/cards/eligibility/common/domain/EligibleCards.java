package com.tradeledger.cards.eligibility.common.domain;

import java.util.HashSet;

public final class EligibleCards {
    private final HashSet<String> eligibleCards;

    public EligibleCards(HashSet<String> eligibleCards) {
        this.eligibleCards = new HashSet<>(eligibleCards);
    }

    public HashSet<String> getEligibleCards() {
        return this.eligibleCards;
    }
}
