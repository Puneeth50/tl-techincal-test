package com.tradeledger.cards.adapters.thirdparty;

import com.github.tomakehurst.wiremock.junit.WireMockRule;
import com.tradeledger.cards.eligibility.common.domain.Applicant;
import com.tradeledger.cards.eligibility.common.domain.EligibilityProvider;
import com.tradeledger.cards.eligibility.common.domain.EligibleCards;
import com.tradeledger.cards.eligibility.common.domain.exceptions.EligibilityCheckException;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.assertj.core.api.Assertions.assertThat;
import static com.github.tomakehurst.wiremock.client.WireMock.*;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
public class ThirdPartyAdapterTest {

    @Rule
    public WireMockRule wireMockRule = new WireMockRule(8080);

    @Autowired
    EligibilityProvider provider;

    @Test
    public void checkIntegrationWithThirdParty() throws EligibilityCheckException {
        Applicant applicant = new Applicant("Boris", "Boris@J.com", "143 Icy Road");
        stubFor(post(urlEqualTo("/eligibility/check"))
                .withHeader("Accept", equalTo("application/json, application/*+json"))
                .willReturn(aResponse()
                        .withStatus(200)
                        .withHeader("Content-Type", "application/json")
                        .withBody("{\"eligibleCards\": [\"C1\"]}")));

        EligibleCards cards = provider.check(applicant);
        assertThat(cards.getEligibleCards()).hasSize(1).contains("C1");
    }

    @Test
    public void testExceptionIfResponseIsNull() {
        Applicant applicant = new Applicant("Boris", "Boris@J.com", "143 Icy Road");
        stubFor(post(urlEqualTo("/eligibility/check"))
                .withHeader("Accept", equalTo("application/json, application/*+json"))
                .willReturn(aResponse()
                        .withStatus(200)
                        .withHeader("Content-Type", "application/json")
                        .withBody("null")));

        assertThatThrownBy(() -> {
            provider.check(applicant);
        }).isInstanceOf(EligibilityCheckException.class);
    }

    @Test
    public void testExceptionIfResponseFailWith500() {
        Applicant applicant = new Applicant("Boris", "Boris@J.com", "143 Icy Road");
        stubFor(post(urlEqualTo("/eligibility/check"))
                .withHeader("Accept", equalTo("application/json, application/*+json"))
                .willReturn(aResponse()
                        .withStatus(500)
                        .withHeader("Content-Type", "application/json")
                        .withBody("{\"eligibleCards\": [\"C1\"]}")));

        assertThatThrownBy(() -> {
            provider.check(applicant);
        }).isInstanceOf(EligibilityCheckException.class);
    }
}
