export const mockResults = [
  {
    display: 'Hematology',
    subSets: [
      {
        display: 'Complete blood count',
        subSets: [
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Hematocrit',
            conceptUuid: '1015AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 32.3,
            hiAbsolute: 100,
            units: '%',
            lowCritical: 21,
            hiNormal: 51.9,
            flatName: 'Hematology-Complete blood count-Hematocrit',
            hasData: false,
            range: '32.3 – 51.9',
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Haemoglobin',
            conceptUuid: '21AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 10.4,
            units: 'g/dL',
            lowCritical: 7,
            hiNormal: 17.8,
            flatName: 'Hematology-Complete blood count-Haemoglobin',
            hasData: false,
            range: '10.4 – 17.8',
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Mean cell hemoglobin concentration',
            conceptUuid: '1017AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 33,
            units: 'g/dL',
            hiNormal: 37,
            flatName: 'Hematology-Complete blood count-Mean cell hemoglobin concentration',
            hasData: false,
            range: '33 – 37',
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Mean corpuscular hemoglobin',
            conceptUuid: '1018AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 26,
            units: 'pg',
            hiNormal: 34,
            flatName: 'Hematology-Complete blood count-Mean corpuscular hemoglobin',
            hasData: false,
            range: '26 – 34',
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Mean corpuscular volume',
            conceptUuid: '851AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 80,
            units: 'fL',
            hiNormal: 100,
            flatName: 'Hematology-Complete blood count-Mean corpuscular volume',
            hasData: false,
            range: '80 – 100',
          },
          {
            obs: [
              {
                obsDatetime: '2024-11-04 05:48:00.0',
                value: '56.0',
                interpretation: 'LOW',
              },
            ],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Platelets',
            conceptUuid: '729AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 134,
            units: '10^3/mL',
            lowCritical: 49,
            hiNormal: 419,
            flatName: 'Hematology-Complete blood count-Platelets',
            hasData: true,
            range: '134 – 419',
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Red blood cells',
            conceptUuid: '679AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 4,
            units: '10^6/uL',
            lowCritical: 2.3,
            hiNormal: 6.1,
            flatName: 'Hematology-Complete blood count-Red blood cells',
            hasData: false,
            range: '4 – 6.1',
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Red cell distribution width',
            conceptUuid: '1016AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 10,
            units: '%',
            hiNormal: 20,
            flatName: 'Hematology-Complete blood count-Red cell distribution width',
            hasData: false,
            range: '10 – 20',
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'White blood cells',
            conceptUuid: '678AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 4,
            units: '10^3/uL',
            lowCritical: 1.4,
            hiNormal: 11,
            flatName: 'Hematology-Complete blood count-White blood cells',
            hasData: false,
            range: '4 – 11',
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Neutrophils (%) - microscopic exam',
            conceptUuid: '1336AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            hiAbsolute: 100,
            units: '%',
            flatName: 'Hematology-Complete blood count-Neutrophils (%) - microscopic exam',
            hasData: false,
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Lymphocytes (%) - microscopic exam',
            conceptUuid: '1338AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            hiAbsolute: 100,
            units: '%',
            flatName: 'Hematology-Complete blood count-Lymphocytes (%) - microscopic exam',
            hasData: false,
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Combined % of monocytes, eosinophils and basophils',
            conceptUuid: '163426AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 1,
            hiAbsolute: 50,
            units: '%',
            hiNormal: 10,
            flatName: 'Hematology-Complete blood count-Combined % of monocytes, eosinophils and basophils',
            hasData: false,
            range: '1 – 10',
          },
        ],
        flatName: 'Hematology-Complete blood count',
        hasData: true,
      },
      {
        display: 'Prothrombin Time (with INR)',
        subSets: [
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'International normalized ratio',
            conceptUuid: '161482AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 0.8,
            hiNormal: 1.2,
            hiCritical: 4,
            flatName: 'Hematology-Prothrombin Time (with INR)-International normalized ratio',
            hasData: false,
            range: '0.8 – 1.2',
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Prothrombin time',
            conceptUuid: '161481AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            units: 'Minute',
            flatName: 'Hematology-Prothrombin Time (with INR)-Prothrombin time',
            hasData: false,
          },
        ],
        flatName: 'Hematology-Prothrombin Time (with INR)',
        hasData: false,
      },
      {
        display: 'Sickling test only',
        subSets: [
          {
            obs: [],
            datatype: 'Coded',
            display: 'Sickle cell screening test',
            conceptUuid: '160225AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            flatName: 'Hematology-Sickling test only-Sickle cell screening test',
            hasData: false,
          },
        ],
        flatName: 'Hematology-Sickling test only',
        hasData: false,
      },
      {
        display: 'Lipid panel',
        subSets: [
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Total cholesterol (mmol/L)',
            conceptUuid: '1006AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            units: 'mmol/L',
            hiNormal: 5.17,
            flatName: 'Hematology-Lipid panel-Total cholesterol (mmol/L)',
            hasData: false,
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'High-density lipoprotein cholesterol measurement (mmol/L)',
            conceptUuid: '1007AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            lowNormal: 0.91,
            units: 'mmol/L',
            flatName: 'Hematology-Lipid panel-High-density lipoprotein cholesterol measurement (mmol/L)',
            hasData: false,
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Low-density lipoprotein cholesterol (mmol/L)',
            conceptUuid: '1008AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            units: 'mmol/L',
            hiNormal: 2.59,
            flatName: 'Hematology-Lipid panel-Low-density lipoprotein cholesterol (mmol/L)',
            hasData: false,
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Very low density lipoprotein measurement (mmol/L)',
            conceptUuid: '1298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            units: 'mmol/L',
            flatName: 'Hematology-Lipid panel-Very low density lipoprotein measurement (mmol/L)',
            hasData: false,
          },
          {
            obs: [],
            datatype: 'Numeric',
            lowAbsolute: 0,
            display: 'Triglycerides (mmol/L)',
            conceptUuid: '1009AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            units: 'mmol/L',
            hiNormal: 2.26,
            flatName: 'Hematology-Lipid panel-Triglycerides (mmol/L)',
            hasData: false,
          },
        ],
        flatName: 'Hematology-Lipid panel',
        hasData: false,
      },
    ],
    flatName: 'Hematology',
    hasData: true,
  },
  {
    display: 'Bloodwork',
    subSets: [
      {
        display: 'Hematology',
        subSets: [
          {
            display: 'Complete blood count',
            subSets: [
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Hematocrit',
                conceptUuid: '1015AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 32.3,
                hiAbsolute: 100,
                units: '%',
                lowCritical: 21,
                hiNormal: 51.9,
                flatName: 'Bloodwork-Hematology-Complete blood count-Hematocrit',
                hasData: false,
                range: '32.3 – 51.9',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Haemoglobin',
                conceptUuid: '21AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 10.4,
                units: 'g/dL',
                lowCritical: 7,
                hiNormal: 17.8,
                flatName: 'Bloodwork-Hematology-Complete blood count-Haemoglobin',
                hasData: false,
                range: '10.4 – 17.8',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Mean cell hemoglobin concentration',
                conceptUuid: '1017AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 33,
                units: 'g/dL',
                hiNormal: 37,
                flatName: 'Bloodwork-Hematology-Complete blood count-Mean cell hemoglobin concentration',
                hasData: false,
                range: '33 – 37',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Mean corpuscular hemoglobin',
                conceptUuid: '1018AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 26,
                units: 'pg',
                hiNormal: 34,
                flatName: 'Bloodwork-Hematology-Complete blood count-Mean corpuscular hemoglobin',
                hasData: false,
                range: '26 – 34',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Mean corpuscular volume',
                conceptUuid: '851AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 80,
                units: 'fL',
                hiNormal: 100,
                flatName: 'Bloodwork-Hematology-Complete blood count-Mean corpuscular volume',
                hasData: false,
                range: '80 – 100',
              },
              {
                obs: [
                  {
                    obsDatetime: '2024-11-04 05:48:00.0',
                    value: '56.0',
                    interpretation: 'LOW',
                  },
                ],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Platelets',
                conceptUuid: '729AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 134,
                units: '10^3/mL',
                lowCritical: 49,
                hiNormal: 419,
                flatName: 'Bloodwork-Hematology-Complete blood count-Platelets',
                hasData: true,
                range: '134 – 419',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Red blood cells',
                conceptUuid: '679AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 4,
                units: '10^6/uL',
                lowCritical: 2.3,
                hiNormal: 6.1,
                flatName: 'Bloodwork-Hematology-Complete blood count-Red blood cells',
                hasData: false,
                range: '4 – 6.1',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Red cell distribution width',
                conceptUuid: '1016AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 10,
                units: '%',
                hiNormal: 20,
                flatName: 'Bloodwork-Hematology-Complete blood count-Red cell distribution width',
                hasData: false,
                range: '10 – 20',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'White blood cells',
                conceptUuid: '678AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 4,
                units: '10^3/uL',
                lowCritical: 1.4,
                hiNormal: 11,
                flatName: 'Bloodwork-Hematology-Complete blood count-White blood cells',
                hasData: false,
                range: '4 – 11',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Neutrophils (%) - microscopic exam',
                conceptUuid: '1336AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                hiAbsolute: 100,
                units: '%',
                flatName: 'Bloodwork-Hematology-Complete blood count-Neutrophils (%) - microscopic exam',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Lymphocytes (%) - microscopic exam',
                conceptUuid: '1338AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                hiAbsolute: 100,
                units: '%',
                flatName: 'Bloodwork-Hematology-Complete blood count-Lymphocytes (%) - microscopic exam',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Combined % of monocytes, eosinophils and basophils',
                conceptUuid: '163426AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 1,
                hiAbsolute: 50,
                units: '%',
                hiNormal: 10,
                flatName:
                  'Bloodwork-Hematology-Complete blood count-Combined % of monocytes, eosinophils and basophils',
                hasData: false,
                range: '1 – 10',
              },
            ],
            flatName: 'Bloodwork-Hematology-Complete blood count',
            hasData: true,
          },
          {
            display: 'Prothrombin Time (with INR)',
            subSets: [
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'International normalized ratio',
                conceptUuid: '161482AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 0.8,
                hiNormal: 1.2,
                hiCritical: 4,
                flatName: 'Bloodwork-Hematology-Prothrombin Time (with INR)-International normalized ratio',
                hasData: false,
                range: '0.8 – 1.2',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Prothrombin time',
                conceptUuid: '161481AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'Minute',
                flatName: 'Bloodwork-Hematology-Prothrombin Time (with INR)-Prothrombin time',
                hasData: false,
              },
            ],
            flatName: 'Bloodwork-Hematology-Prothrombin Time (with INR)',
            hasData: false,
          },
          {
            display: 'Sickling test only',
            subSets: [
              {
                obs: [],
                datatype: 'Coded',
                display: 'Sickle cell screening test',
                conceptUuid: '160225AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                flatName: 'Bloodwork-Hematology-Sickling test only-Sickle cell screening test',
                hasData: false,
              },
            ],
            flatName: 'Bloodwork-Hematology-Sickling test only',
            hasData: false,
          },
          {
            display: 'Lipid panel',
            subSets: [
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Total cholesterol (mmol/L)',
                conceptUuid: '1006AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                hiNormal: 5.17,
                flatName: 'Bloodwork-Hematology-Lipid panel-Total cholesterol (mmol/L)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'High-density lipoprotein cholesterol measurement (mmol/L)',
                conceptUuid: '1007AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 0.91,
                units: 'mmol/L',
                flatName: 'Bloodwork-Hematology-Lipid panel-High-density lipoprotein cholesterol measurement (mmol/L)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Low-density lipoprotein cholesterol (mmol/L)',
                conceptUuid: '1008AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                hiNormal: 2.59,
                flatName: 'Bloodwork-Hematology-Lipid panel-Low-density lipoprotein cholesterol (mmol/L)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Very low density lipoprotein measurement (mmol/L)',
                conceptUuid: '1298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                flatName: 'Bloodwork-Hematology-Lipid panel-Very low density lipoprotein measurement (mmol/L)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Triglycerides (mmol/L)',
                conceptUuid: '1009AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                hiNormal: 2.26,
                flatName: 'Bloodwork-Hematology-Lipid panel-Triglycerides (mmol/L)',
                hasData: false,
              },
            ],
            flatName: 'Bloodwork-Hematology-Lipid panel',
            hasData: false,
          },
        ],
        flatName: 'Bloodwork-Hematology',
        hasData: true,
      },
      {
        display: 'Chemistry',
        subSets: [
          {
            display: 'Serum chemistry panel',
            subSets: [
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum glucose',
                conceptUuid: '887AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mg/dl',
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Serum glucose',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Fasting blood glucose measurement (mg/dL)',
                conceptUuid: '160912AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mg/dL',
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Fasting blood glucose measurement (mg/dL)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Post-prandial blood glucose measurement (mg/dL)',
                conceptUuid: '160914AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mg/dL',
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Post-prandial blood glucose measurement (mg/dL)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Blood urea nitrogen',
                conceptUuid: '857AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Blood urea nitrogen',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum creatinine (umol/L)',
                conceptUuid: '790AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'umol/L',
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Serum creatinine (umol/L)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Total bilirubin',
                conceptUuid: '655AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'umol/L',
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Total bilirubin',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum glutamic-pyruvic transaminase',
                conceptUuid: '654AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 0,
                units: 'IU/L',
                hiNormal: 35,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Serum glutamic-pyruvic transaminase',
                hasData: false,
                range: '0 – 35',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum glutamic-oxaloacetic transaminase',
                conceptUuid: '653AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 25,
                units: 'IU/L',
                hiNormal: 45,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Serum glutamic-oxaloacetic transaminase',
                hasData: false,
                range: '25 – 45',
              },
              {
                obs: [],
                datatype: 'Numeric',
                display: 'Alkaline phosphatase',
                conceptUuid: '785AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 0,
                units: 'U/L',
                hiNormal: 270,
                hiCritical: 541,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Alkaline phosphatase',
                hasData: false,
                range: '0 – 270',
              },
              {
                obs: [],
                datatype: 'Numeric',
                display: 'uric acid, serum',
                conceptUuid: '159825AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 3.6,
                units: 'mg/dL',
                hiNormal: 8.3,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-uric acid, serum',
                hasData: false,
                range: '3.6 – 8.3',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Total protein',
                conceptUuid: '717AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'g/dL',
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Total protein',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum albumin',
                conceptUuid: '848AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 2.8,
                units: 'g/dL',
                hiNormal: 5.4,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Serum albumin',
                hasData: false,
                range: '2.8 – 5.4',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Total cholesterol (mmol/L)',
                conceptUuid: '1006AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                hiNormal: 5.17,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Total cholesterol (mmol/L)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Triglycerides (mmol/L)',
                conceptUuid: '1009AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                hiNormal: 2.26,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Triglycerides (mmol/L)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Amylase',
                conceptUuid: '1299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 28,
                units: 'IU/L',
                hiNormal: 200,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Amylase',
                hasData: false,
                range: '28 – 200',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum sodium',
                conceptUuid: '1132AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 142,
                units: 'mmol/L',
                lowCritical: 123,
                hiNormal: 151,
                hiCritical: 156,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Serum sodium',
                hasData: false,
                range: '142 – 151',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum potassium',
                conceptUuid: '1133AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 3.5,
                units: 'mmol/L',
                lowCritical: 2.4,
                hiNormal: 5.6,
                hiCritical: 6.6,
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Serum potassium',
                hasData: false,
                range: '3.5 – 5.6',
              },
              {
                obs: [],
                datatype: 'Numeric',
                display: 'Serum calcium',
                conceptUuid: '159497AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mg/dL',
                flatName: 'Bloodwork-Chemistry-Serum chemistry panel-Serum calcium',
                hasData: false,
              },
            ],
            flatName: 'Bloodwork-Chemistry-Serum chemistry panel',
            hasData: false,
          },
          {
            display: 'Comprehensive metabolic panel',
            subSets: [],
            flatName: 'Bloodwork-Chemistry-Comprehensive metabolic panel',
            hasData: false,
          },
          {
            display: 'Renal function panel',
            subSets: [
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Blood urea nitrogen',
                conceptUuid: '857AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                flatName: 'Bloodwork-Chemistry-Renal function panel-Blood urea nitrogen',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum creatinine (umol/L)',
                conceptUuid: '790AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'umol/L',
                flatName: 'Bloodwork-Chemistry-Renal function panel-Serum creatinine (umol/L)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Text',
                display: 'Urine routine and microscopy',
                conceptUuid: '161445AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                flatName: 'Bloodwork-Chemistry-Renal function panel-Urine routine and microscopy',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum glucose',
                conceptUuid: '887AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mg/dl',
                flatName: 'Bloodwork-Chemistry-Renal function panel-Serum glucose',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 10,
                display: 'Urea measurement (calculated)',
                conceptUuid: '163699AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 20,
                hiAbsolute: 200,
                units: 'mg/dl',
                hiNormal: 40,
                flatName: 'Bloodwork-Chemistry-Renal function panel-Urea measurement (calculated)',
                hasData: false,
                range: '20 – 40',
              },
            ],
            flatName: 'Bloodwork-Chemistry-Renal function panel',
            hasData: false,
          },
          {
            display: 'Basic metabolic panel',
            subSets: [
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum sodium',
                conceptUuid: '1132AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 142,
                units: 'mmol/L',
                lowCritical: 123,
                hiNormal: 151,
                hiCritical: 156,
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Serum sodium',
                hasData: false,
                range: '142 – 151',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum potassium',
                conceptUuid: '1133AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 3.5,
                units: 'mmol/L',
                lowCritical: 2.4,
                hiNormal: 5.6,
                hiCritical: 6.6,
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Serum potassium',
                hasData: false,
                range: '3.5 – 5.6',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum carbon dioxide',
                conceptUuid: '1135AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 22,
                units: 'mmol/L',
                hiNormal: 27,
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Serum carbon dioxide',
                hasData: false,
                range: '22 – 27',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum chloride',
                conceptUuid: '1134AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                lowNormal: 96,
                units: 'mmol/L',
                hiNormal: 107,
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Serum chloride',
                hasData: false,
                range: '96 – 107',
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Blood urea nitrogen',
                conceptUuid: '857AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Blood urea nitrogen',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum glucose',
                conceptUuid: '887AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mg/dl',
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Serum glucose',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                lowAbsolute: 0,
                display: 'Serum creatinine (umol/L)',
                conceptUuid: '790AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'umol/L',
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Serum creatinine (umol/L)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'N/A',
                display: 'Creatine',
                conceptUuid: '74023AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Creatine',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                display: 'Serum glucose (mmol)',
                conceptUuid: '1458AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mmol/L',
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Serum glucose (mmol)',
                hasData: false,
              },
              {
                obs: [],
                datatype: 'Numeric',
                display: 'Serum calcium',
                conceptUuid: '159497AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                units: 'mg/dL',
                flatName: 'Bloodwork-Chemistry-Basic metabolic panel-Serum calcium',
                hasData: false,
              },
            ],
            flatName: 'Bloodwork-Chemistry-Basic metabolic panel',
            hasData: false,
          },
        ],
        flatName: 'Bloodwork-Chemistry',
        hasData: false,
      },
    ],
    flatName: 'Bloodwork',
    hasData: true,
  },
  {
    display: 'HIV viral load',
    subSets: [
      {
        obs: [],
        datatype: 'Numeric',
        lowAbsolute: 0,
        display: 'HIV viral load',
        conceptUuid: '856AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        units: 'copies/ml',
        flatName: 'HIV viral load-HIV viral load',
        hasData: false,
      },
    ],
    flatName: 'HIV viral load',
    hasData: false,
  },
];