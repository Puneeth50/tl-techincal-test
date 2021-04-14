package com.tradeledger.cards.eligibility.common.domain.exceptions;

public class EligibilityCheckException extends Exception {

    public EligibilityCheckException() {
        super("Failed to check eligibility");
    }
}
