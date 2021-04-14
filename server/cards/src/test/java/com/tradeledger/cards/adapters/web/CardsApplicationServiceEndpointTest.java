package com.tradeledger.cards.adapters.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradeledger.cards.eligibility.adapters.web.CardsApplicationEndpoint;
import com.tradeledger.cards.eligibility.common.domain.Applicant;
import com.tradeledger.cards.eligibility.common.domain.CardsApplicationService;
import com.tradeledger.cards.eligibility.common.domain.EligibleCards;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.HashSet;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = CardsApplicationEndpoint.class)
public class CardsApplicationServiceEndpointTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objMapper;

    @MockBean
    private CardsApplicationService service;

    @Test
    public void testCardsApplication() throws Exception {

        Applicant applicant = new Applicant("Boris", "Boris@J.com", "143 Icy Road");
        EligibleCards eligibleCards = new EligibleCards(new HashSet<>(Arrays.asList("C1", "C2", "C3")));

        when(service.apply(applicant)).thenReturn(eligibleCards);

        mvc.perform(
                post("/cards/apply")
                        .contentType("application/json")
                        .content(objMapper.writeValueAsString(applicant))
        )
                .andExpect(status().isOk());
    }
}
