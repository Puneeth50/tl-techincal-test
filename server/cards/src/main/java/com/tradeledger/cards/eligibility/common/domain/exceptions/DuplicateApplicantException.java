package com.tradeledger.cards.eligibility.common.domain.exceptions;

public class DuplicateApplicantException extends Exception {

    public DuplicateApplicantException() {
        super("Duplicate applicant");
    }

}
