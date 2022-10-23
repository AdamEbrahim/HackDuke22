package main

import (
	//"fmt"
	"net/http"
	"log"
	"io"
	"encoding/json"
)

func getExerciseData() []Exercise {
	resp, err := http.Get("http://localhost:3001/GetExerciseData")
	if err != nil {
		log.Fatal("error retrieving from API")
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("failed to read data received from API")
	}
	//fmt.Println(body)
	var ex []Exercise

	json.Unmarshal(body, &ex)

	return ex
}

func getPrimaryMuscleData() []PrimaryMuscle {
	resp, err := http.Get("http://localhost:3001/GetPrimaryMuscleData")
	if err != nil {
		log.Fatal("error retrieving from API")
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("failed to read data received from API")
	}
	//fmt.Println(body)
	var ex []PrimaryMuscle

	json.Unmarshal(body, &ex)

	return ex
}

func getSecondaryMuscleData() []SecondaryMuscle {
	resp, err := http.Get("http://localhost:3001/GetSecondaryMuscleData")
	if err != nil {
		log.Fatal("error retrieving from API")
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("failed to read data received from API")
	}
	//fmt.Println(body)
	var ex []SecondaryMuscle

	json.Unmarshal(body, &ex)

	return ex
}

func getEquipmentData() []Equipment {
	resp, err := http.Get("http://localhost:3001/GetEquipmentData")
	if err != nil {
		log.Fatal("error retrieving from API")
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("failed to read data received from API")
	}
	//fmt.Println(body)
	var ex []Equipment

	json.Unmarshal(body, &ex)

	return ex
}

func getMuscleGroupBroadData() []MuscleGroupBroad {
	resp, err := http.Get("http://localhost:3001/GetMuscleGroupBroadData")
	if err != nil {
		log.Fatal("error retrieving from API")
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("failed to read data received from API")
	}
	//fmt.Println(body)
	var ex []MuscleGroupBroad

	json.Unmarshal(body, &ex)

	return ex
}