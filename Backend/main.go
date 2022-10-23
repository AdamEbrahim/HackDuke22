package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"github.com/joho/godotenv"
	"errors"
	//"database/sql"
	"gorm.io/driver/postgres"
  	"gorm.io/gorm"
	"github.com/lib/pq"
)

type Exercise struct {
	gorm.Model
	Name string `gorm:"uniqueIndex; not null" json:"name"`
	Descr string `json:"descr"`
	MuscleGroupBroadName string `json:"muscleGroupBroadName"`
	PrimaryMuscles []PrimaryMuscle `gorm:"many2many:exercise_primarymuscles;" json:"primaryMuscles"`
	SecondaryMuscles []SecondaryMuscle `gorm:"many2many:exercise_secondarymuscles;" json:"secondaryMuscles"`
	Equipment []Equipment `gorm:"many2many:exercise_equipments;" json:"equipment"`
	Advanced string `json:"advanced"`
	Superset string `json:"superset"`
	Intensity string `json:"intensity"`
	CompoundMovement string `json:"compoundMovement"`
	ExerciseImages pq.StringArray `gorm:"type:varchar(128)[]" json:"exerciseImages"`

}

type PrimaryMuscle struct {
	Name string `gorm:"primaryKey"`
	Name2 string //name_en needs to map to this one
	IsFront bool
	Image string
	Image2 string

}

type SecondaryMuscle struct {
	Name string `gorm:"primaryKey"`
	Name2 string //name_en needs to map to this one
	IsFront bool
	Image string
	Image2 string

}

type Equipment struct {
	Name string `gorm:"primaryKey"`
}

type MuscleGroupBroad struct {
	Name string `gorm:"primaryKey"`
	Exercises []Exercise `gorm:"foreignKey:MuscleGroupBroadName;association_foreignkey:Name"`
}

func init() {
	if _, err := os.Stat("./.env"); errors.Is(err, os.ErrNotExist) {
		// .env file does not exist (production)
		fmt.Println("cant find env")
	} else {
		// .env file exists (development)
		err2 := godotenv.Load(".env")

		if err2 != nil {
			log.Fatal("Error loading .env file")
		}
	}

	

}

func testing(w http.ResponseWriter, r *http.Request) {
	fmt.Println("test Working")

}

func main() {
	fmt.Println("App Running")
	port := os.Getenv("PORT")
	fmt.Println(port)

	db, err := gorm.Open(postgres.Open(os.Getenv("DATABASE_URL")+"&application_name=$ docs_simplecrud_gorm"), &gorm.Config{})
	if err != nil {
		log.Fatal("Error connecting gorm")
	}

	//db.AutoMigrate(&MuscleGroupBroad{}, &Exercise{}, &PrimaryMuscle{}, &SecondaryMuscle{}, &Equipment{})

	fmt.Println(db)

	//exercises := getExerciseData()
	//primaryMuscles := getPrimaryMuscleData()
	//secondaryMuscles := getSecondaryMuscleData()
	//equipments := getEquipmentData()
	//muscleGroupBroads := getMuscleGroupBroadData()

	/*
	for i:= range equipments {
		db.Create(&(equipments[i]))
	}
	*/
	
	var primaryMuscles []PrimaryMuscle
	db.Find(&primaryMuscles)
	fmt.Println(primaryMuscles)

	mux := http.NewServeMux()
	mux.HandleFunc("/test", testing)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}