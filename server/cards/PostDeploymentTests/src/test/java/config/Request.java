package config;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.hamcrest.Matchers;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;

public class Request {

    private String host = "http://localhost:80/";

    public void verifyResponseStatusValue(Response response, int expectedCode) {
        assertThat(response.getStatusCode(), Matchers.is(expectedCode));
    }

    public void verifyResponseBody(Response response, String expectedCode) {
        assertThat(response.getBody().asString(), Matchers.is(expectedCode));
    }

    public void verfiyEligibityCards(Response response, String cards) {
        List<String> actual = response.body().jsonPath().get("eligibleCards");
        List<String> expected = new ArrayList<String>(Arrays.asList(cards.split(",")));
        if (actual.isEmpty()) {
            assertThat("eligibility cards is not empty", expected.get(0).isEmpty());
        } else {
            assertThat(actual, Matchers.is(expected));
        }

    }

    public Response requestWithInvalidFieldNames(String url, String payLoad) {
        RequestSpecification request = RestAssured.given().baseUri(host);
        request.header("Content-Type", "application/json");
        return request.body(payLoad).post(url);
    }

    public void verfiyErrorMessage(Response response, String expectedError) {
        String actualError = response.body().jsonPath().get("error");
        assertThat(actualError, Matchers.is(expectedError));
    }

    public RequestSpecification getRequestWithJSONHeaders() {
        RequestSpecification r = RestAssured.given();
        r.header("Content-Type", "application/json");
        return r;
    }

    protected JSONObject createJSONPayload(Object pojo) {
        return new JSONObject(pojo);
    }

    public Response processHttpRequest(String requestType, String url, Object pojo) {
        RequestSpecification request = RestAssured.given().baseUri(host);
        request.header("Content-Type", "application/json");
        Response response = null;

        if (null != pojo) {
            String payload = createJSONPayload(pojo).toString();
            request.body(payload);
        }
        switch (requestType.toUpperCase()) {
            case "GET":
                response = request.get(url);
                break;
            case "POST":
                response = request.post(url);
                break;
            default:
                throw new IllegalArgumentException("No Such method " + requestType.toUpperCase());
        }
        return response;
    }

    public Response processHttpRequestWithoutHeaders(String requestType, String url, Object pojo) {
        RequestSpecification request = RestAssured.given().baseUri(host);
        Response response = null;

        if (null != pojo) {
            String payload = createJSONPayload(pojo).toString();
            request.body(payload);
        }
        switch (requestType.toUpperCase()) {
            case "GET":
                response = request.get(url);
                break;
            case "POST":
                response = request.post(url);
                break;
            default:
                throw new IllegalArgumentException("No Such method " + requestType.toUpperCase());
        }
        return response;
    }
}
