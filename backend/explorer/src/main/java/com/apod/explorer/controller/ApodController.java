package com.apod.explorer.controller;

import com.apod.explorer.model.ApodResponse;
import com.apod.explorer.service.ApodService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/apod")
@CrossOrigin(origins = "*")
public class ApodController {

    private final ApodService apodService;

    public ApodController(ApodService apodService) {
        this.apodService = apodService;
    }

    @GetMapping("/today")
    public ApodResponse getTodayApod() {
        return apodService.getApod(null);
    }

    @GetMapping("/{date}")
    public ApodResponse getApodByDate(@PathVariable String date) {
        return apodService.getApod(date);
    }
}
