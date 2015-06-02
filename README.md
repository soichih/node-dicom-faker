
# dicom-faker

Generates random dicom headers.

Right this, this is super basic.. it only randomizes following fields

* Various UID (SOPInstanceUID, SeriesInstanceUID, StudyInstanceUID, etc..)
* Various Patient information (name, sex, weight, etc..)
* Various Dates (Study Date, time, SeriesDate, time, etc..)
* WindowCenter
* WindowWidth
* RescaleSlope
* LargestImagePixelValue

In the future, it will allow you to specify modality, or Manufacturer and generate more realistic data.

## Installation

    npm install dicom-faker -g

## Usage

To generate a random instance using built in template, just run

    dicom-faker

Or you can use your own template to generate another instance by adding "instance" followed by the path for your template.

    dicom-faker instance my_template.json

If you want to create a whole new series, use "series" option.

    dicom-faker series my_template.json

Or if you want to create a new study

    dicom-faker study my_template.json

Or

    dicom-faker patient my_template.json

Dicoms images are usually organized in following hierarchy

> patient > study > series > instance

Basically, if you specify "series", it randomizes fields for series and instance. If you specify "study", then it randommizes study, series, instance., If you specify "patient", it randomizes all fields that dicom-faker can randomize.


