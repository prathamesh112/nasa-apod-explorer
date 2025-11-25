package com.apod.explorer.service;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.apod.explorer.model.ApodResponse;

import io.github.cdimascio.dotenv.Dotenv;

@Service
public class ApodService {

    private final Dotenv dotenv = Dotenv.load();

    private final String apiKey = dotenv.get("NASA_API_KEY");
    private final String apiUrl = "https://api.nasa.gov/planetary/apod";

    private final WebClient webClient = WebClient.create();

    @Cacheable(value = "apodCache", key = "#date != null ? #date : 'today'")
    public ApodResponse getApod(String date) {
        String url = apiUrl + "?api_key=" + apiKey;

        if (date != null)
            url += "&date=" + date;

        return webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(ApodResponse.class)
                .block();
    }
}