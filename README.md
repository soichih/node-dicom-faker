
# dicom-faker

Generates random dicom headers.

Right now, this is super basic.. it only randomizes following fields

* Various UID (SOPInstanceUID, SeriesInstanceUID, StudyInstanceUID, etc..)
* Various Patient information (name, sex, weight, etc..)
* Various Dates (Study Date, time, SeriesDate, time, etc..)
* WindowCenter
* WindowWidth
* RescaleSlope
* LargestImagePixelValue
* (A few others..)

In the future, I want to be able to specify modality, or Manufacturer and generate more realistic data (Help welcomed - especially sample headers!)

Another major todo is that, it currently uses uuid for various dicom IDs generated. I need to come up with some library that can parse / generate dicom UIDs. If you know how to do this, please let me know also.

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

## Sample Output

```
{
    "FileMetaInformationGroupLength": 202,
    "MediaStorageSOPClassUID": "1.2.840.10008.5.1.4.1.1.128",
    "MediaStorageSOPInstanceUID": "8e45fb13-f481-4b8a-bc1b-9929a30953e8",
    "TransferSyntaxUID": "1.2.840.10008.1.2",
    "ImplementationClassUID": "1.2.826.0.1.3680043.2.135.1066.101",
    "ImplementationVersionName": "1.4.16/OTHER",
    "SpecificCharacterSet": "ISO_IR 100",
    "ImageType": "ORIGINAL",
    "SOPClassUID": "1.2.840.10008.5.1.4.1.1.128",
    "SOPInstanceUID": "8e45fb13-f481-4b8a-bc1b-9929a30953e8",
    "StudyDate": "20100118",
    "SeriesDate": "20100118",
    "AcquisitionDate": "20130710",
    "ContentDate": "20130710",
    "StudyTime": "062615.161000",
    "SeriesTime": "062615.161000",
    "AcquisitionTime": "152733.000006",
    "ContentTime": "155127.000000",
    "Modality": "PT",
    "Manufacturer": "SIEMENS",
    "InstitutionName": "Indiana University",
    "InstitutionAddress": "Indianapolis 46202 16th St 355",
    "StationName": "CT76543",
    "StudyDescription": "rich Harber, Bogisich and Wiza",
    "SeriesDescription": "rich Harber, Bogisich and Wiza / Monitored coherent database",
    "InstitutionalDepartmentName": "Department",
    "ManufacturerModelName": "SOMATOM Definition AS_mCT",
    "PatientName": {
        "Alphabetic": "Monserrat Ledner"
    },
    "PatientID": 65112676,
    "PatientBirthDate": "20100118",
    "PatientSex": "M",
    "PatientAge": "040Y",
    "PatientWeight": 252.70000000000002,
    "SliceThickness": 2.027,
    "DeviceSerialNumber": "11035",
    "SoftwareVersions": "syngo MI.PET/CT 2012A",
    "CollimatorType": "NONE",
    "DateOfLastCalibration": "20130710",
    "TimeOfLastCalibration": "073952.000000",
    "ConvolutionKernel": "XYZ Gauss5.00",
    "ActualFrameDuration": 1200000,
    "PatientPosition": "HFS",
    "StudyInstanceUID": "7d46da07-1ef7-4c70-b1b6-21d0134e195a",
    "SeriesInstanceUID": "bd099bf2-a4f1-410b-ae10-5a8ba09cab9c",
    "StudyID": 9541,
    "SeriesNumber": 1200,
    "AcquisitionNumber": 2002,
    "InstanceNumber": 1,
    "ImagePositionPatient": -405.659,
    "ImageOrientationPatient": 1,
    "FrameOfReferenceUID": "1.3.12.2.1107.5.1.4.11035.40000013071013080424300000023",
    "SliceLocation": 1.0850227383663877,
    "SamplesPerPixel": 1,
    "PhotometricInterpretation": "MONOCHROME2",
    "Rows": 128,
    "Columns": 128,
    "PixelSpacing": 6.3638,
    "CorrectedImage": "NORM",
    "BitsAllocated": 16,
    "BitsStored": 16,
    "HighBit": 15,
    "LargestImagePixelValue": -7,
    "WindowCenter": 2905,
    "WindowWidth": 21981,
    "RescaleSlope": 0.034460544244014034,
    "RescaleType": "PROPCPS",
    "RequestedProcedureDescription": "PET MM_999 (Adult)",
    "PerformedProcedureStepStartDate": "20130810",
    "PerformedProcedureStepStartTime": "154813.216000",
    "PerformedProcedureStepID": "CT201307101423-1",
    "PerformedProcedureStepDescription": "PET^MM_999 (Adult)",
    "EnergyWindowRangeSequence": {
        "00540014": {
            "vr": "DS",
            "Value": [
                435
            ]
        },
        "00540015": {
            "vr": "DS",
            "Value": [
                650
            ]
        }
    },
    "RadiopharmaceuticalInformationSequence": {
        "00180031": {
            "vr": "LO",
            "Value": [
                "Solution"
            ]
        },
        "00181072": {
            "vr": "TM",
            "Value": [
                "150001.000000"
            ]
        },
        "00181074": {
            "vr": "DS",
            "Value": [
                59200000
            ]
        },
        "00181075": {
            "vr": "DS",
            "Value": [
                45720
            ]
        },
        "00181076": {
            "vr": "DS",
            "Value": [
                0.179
            ]
        },
        "00540300": {
            "vr": "SQ",
            "Value": [
                {
                    "00080100": {
                        "vr": "SH",
                        "Value": [
                            "C-127A2"
                        ]
                    },
                    "00080102": {
                        "vr": "SH",
                        "Value": [
                            "SRT"
                        ]
                    },
                    "00080104": {
                        "vr": "LO",
                        "Value": [
                            "^64^Copper"
                        ]
                    },
                    "00080105": {
                        "vr": "CS",
                        "Value": [
                            "DCMR"
                        ]
                    },
                    "00080106": {
                        "vr": "DT",
                        "Value": [
                            "20070625000000.000000"
                        ]
                    },
                    "0008010F": {
                        "vr": "CS",
                        "Value": [
                            "4020"
                        ]
                    }
                }
            ]
        }
    },
    "NumberOfSlices": 200,
    "PatientOrientationCodeSequence": {
        "00080100": {
            "vr": "SH",
            "Value": [
                "F-10450"
            ]
        },
        "00080102": {
            "vr": "SH",
            "Value": [
                "99SDM"
            ]
        },
        "00080104": {
            "vr": "LO",
            "Value": [
                "recumbent"
            ]
        },
        "00080105": {
            "vr": "CS",
            "Value": [
                "DCMR"
            ]
        },
        "00080106": {
            "vr": "DT",
            "Value": [
                "20020904000000.000000"
            ]
        },
        "0008010F": {
            "vr": "CS",
            "Value": [
                "19"
            ]
        },
        "00540412": {
            "vr": "SQ",
            "Value": [
                {
                    "00080100": {
                        "vr": "SH",
                        "Value": [
                            "F-10340"
                        ]
                    },
                    "00080102": {
                        "vr": "SH",
                        "Value": [
                            "99SDM"
                        ]
                    },
                    "00080104": {
                        "vr": "LO",
                        "Value": [
                            "supine"
                        ]
                    },
                    "00080105": {
                        "vr": "CS",
                        "Value": [
                            "DCMR"
                        ]
                    },
                    "00080106": {
                        "vr": "DT",
                        "Value": [
                            "20020904000000.000000"
                        ]
                    },
                    "0008010F": {
                        "vr": "CS",
                        "Value": [
                            "20"
                        ]
                    }
                }
            ]
        }
    },
    "PatientGantryRelationshipCodeSequence": {
        "00080100": {
            "vr": "SH",
            "Value": [
                "F-10470"
            ]
        },
        "00080102": {
            "vr": "SH",
            "Value": [
                "99SDM"
            ]
        },
        "00080104": {
            "vr": "LO",
            "Value": [
                "headfirst"
            ]
        },
        "00080105": {
            "vr": "CS",
            "Value": [
                "DCMR"
            ]
        },
        "00080106": {
            "vr": "DT",
            "Value": [
                "20020904000000.000000"
            ]
        },
        "0008010F": {
            "vr": "CS",
            "Value": [
                "21"
            ]
        }
    },
    "SeriesType": "WHOLE BODY",
    "Units": "PROPCPS",
    "CountsSource": "EMISSION",
    "RandomsCorrectionMethod": "DLYD",
    "DecayCorrection": "START",
    "ReconstructionMethod": "OSEM3D 2i8s",
    "AxialAcceptance": 49,
    "AxialMash": 5,
    "FrameReferenceTime": 1806090.3605396,
    "DecayFactor": 1.02776,
    "DoseCalibrationFactor": 164738000,
    "ImageIndex": 1
}
```
