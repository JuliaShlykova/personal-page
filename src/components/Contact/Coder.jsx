import React from 'react';

const animationTime = '8s';

const arrKeyTimes = [0.1, 0.2, 0.25, 0.3, 0.5];

const lengthOfScreen = 74;

const dashedLineValues = () => {
  let gap = 2;
  let p1 = Math.random() * (lengthOfScreen - gap * 2);
  let p2 = Math.random() * (lengthOfScreen - gap * 2);
  let start = Math.round(Math.min(p1, p2));
  let end = Math.round(Math.max(p1, p2));
  return [start, gap, end - start, gap, lengthOfScreen - end].join(' ');
};

const Coder = () => {
  return (
    <div>
      <svg
        width={390.65002}
        height={500.02875}
        viewBox="0 0 103.35948 132.29927"
        id="svg-coder"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="cut-off-screen">
            <rect
              x={(102 - lengthOfScreen) / 2}
              y="21"
              width={lengthOfScreen}
              height="60"
            />
          </clipPath>
        </defs>
        <g>
          <circle id="back-circle" cx={51.679741} cy={51.679737} r={51.59375} />
          <g id="lines-of-code" clipPath="url(#cut-off-screen)">
            {Array.from({ length: 5 }, (_, i) => (
              <line
                key={i}
                x1={(102 - lengthOfScreen) / 2}
                y1={25 + 10 * i}
                x2={102 - (102 - lengthOfScreen) / 2}
                y2={25 + 10 * i}
                strokeWidth="5"
                strokeDasharray={dashedLineValues()}
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`${-lengthOfScreen - 5}; ${-lengthOfScreen - 5}; 0; 0; 0 ${-lengthOfScreen}`}
                  keyTimes={`0; ${arrKeyTimes[3] + 0.05 * i}; ${arrKeyTimes[3] + 0.05 * (i + 1)}; ${arrKeyTimes[4] + 0.4}; 1`}
                  dur={animationTime}
                  repeatCount="indefinite"
                />
              </line>
            ))}
          </g>
        </g>
        <g
          id="hoody"
          style={{
            display: 'inline',
          }}
          transform="translate(-54.153589,-42.247341)"
        >
          <path
            id="rect1"
            style={{
              opacity: 1,
              stroke: '#000000',
              strokeWidth: 0.957108,
              strokeDasharray: 'none',
              stopColor: '#000000',
              stopOpacity: 1,
            }}
            d="m 94.033176,125.60913 h 23.600384 c 8.65149,0 16.09731,5.12837 17.78137,12.24706 l 3.92572,12.28335 c 1.4997,6.33935 -4.28248,16.55806 -11.98681,16.55806 H 84.312886 c -7.704325,0 -13.989693,-10.29113 -11.986804,-16.55806 l 3.925716,-12.28335 c 2.249121,-7.03736 9.129893,-12.24706 17.781378,-12.24706 z"
          />
          <path
            id="path8"
            style={{
              fillOpacity: 1,
              stroke: '#000000',
              strokeWidth: 1.05833,
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }}
            d="m 130.02213,116.41666 c 0,-8 -18.99999,-24.414146 -24.00064,-24.414146 -5.00066,0 -24.000658,16.414146 -24.000658,24.414146 0,8 11.999993,18.81614 24.000658,18.81614 12.00065,0 24.00064,-10.81614 24.00064,-18.81614 z"
          />
        </g>
        <g
          id="laptop"
          style={{
            display: 'inline',
          }}
          transform="translate(-54.153589,-42.247341)"
        >
          <path
            id="rect10"
            style={{
              opacity: 1,
              fill: '#8b95a0',
              fillOpacity: 1,
              stroke: '#000000',
              strokeWidth: 0.994003,
            }}
            d="m 81.261063,169.34042 h 49.144547 v 0.92431 a 4.3531887,4.3531887 135 0 1 -4.35319,4.35319 H 85.614252 a 4.3531887,4.3531887 45 0 1 -4.353189,-4.35319 z"
            transform="matrix(0.97298476,0,0,0.64375531,2.8591057,61.815449)"
          />
          <path
            id="rect9"
            style={{
              opacity: 1,
              fill: '#c8d4e5',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.01761,
              strokeDasharray: 'none',
            }}
            d="m 84.832212,137.58333 h 42.002238 c 3.09227,0 5.56758,2.3717 5.45721,5.22879 l -2.4554,24.23733 c -0.10625,2.75062 -2.54891,4.92972 -5.52594,4.92972 H 87.35634 c -2.977032,0 -5.248322,-2.18934 -5.52594,-4.92972 L 79.375,142.81212 c -0.288364,-2.84646 2.364941,-5.22879 5.457212,-5.22879 z"
          />
          <path
            style={{
              fontVariationSettings: 'normal',
              opacity: 1,
              fill: 'none',
              fillOpacity: 1,
              stroke: '#000000',
              strokeWidth: 1.05833,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m 100.54167,156.10416 c 1.23472,-1.98437 2.46944,-3.96875 2.91041,-3.96873 0.44097,2e-5 0.0882,1.98436 -0.26458,3.96873 2.07257,-2.64583 4.14513,-5.29167 5.02707,-5.29164 0.88195,3e-5 0.57328,2.64581 0.2646,5.29164"
            id="path11"
            transform="translate(1.116678,1.4243337)"
          />
          <path
            id="path12"
            style={{
              fontVariationSettings: 'normal',
              opacity: 1,
              fill: '#8b95a0',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.05833,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m 130.21841,138.66957 c -2.37729,9.0948 -5.92555,17.51123 -14.24306,23.16706 -7.2663,4.94102 -18.171949,7.77495 -30.318565,9.89035 0.531016,0.16368 1.101101,0.25218 1.699638,0.25218 h 36.953817 c 2.97703,0 5.42003,-2.17931 5.52628,-4.92993 l 2.45514,-24.23728 c 0.0647,-1.67404 -0.75857,-3.18105 -2.07325,-4.14238 z"
          />
          <path
            id="path15"
            style={{
              fill: 'none',
              fillOpacity: 1,
              stroke: '#000000',
              strokeWidth: 1.01761,
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }}
            d="m 84.832029,137.58333 c -3.092271,0 -5.745395,2.38216 -5.457031,5.22862 l 2.455147,24.23728 c 0.222009,2.19146 1.721109,4.02737 3.834392,4.6762 -0.0028,4.8e-4 -0.005,0.001 -0.0078,0.002 0.01283,0.004 0.02692,0.005 0.03979,0.009 0.232083,0.0697 0.471871,0.12282 0.717786,0.16278 0.05236,0.009 0.105186,0.0151 0.15813,0.0222 0.255671,0.0343 0.515875,0.0579 0.783931,0.0579 h 36.953816 c 0.74426,0 1.45493,-0.13615 2.10426,-0.38344 0.32466,-0.12363 0.63414,-0.2751 0.92449,-0.45113 0.43546,-0.264 0.82832,-0.58356 1.16686,-0.94775 0.11296,-0.12151 0.21999,-0.24769 0.32039,-0.37879 0.10025,-0.13088 0.19427,-0.26652 0.28112,-0.40617 8e-5,-1.3e-4 -8e-5,-3.9e-4 0,-5.2e-4 0.0868,-0.13965 0.16669,-0.28334 0.23926,-0.43098 7e-5,-1.4e-4 -7e-5,-3.8e-4 0,-5.2e-4 0.0726,-0.14778 0.13789,-0.29924 0.19534,-0.45423 0.10334,-0.2788 0.17765,-0.5701 0.22789,-0.86868 0.006,-0.0332 0.0147,-0.0653 0.0196,-0.0987 3e-5,-1.6e-4 -2e-5,-3.4e-4 0,-5.1e-4 0.0245,-0.16706 0.0404,-0.33658 0.047,-0.5085 l 2.45514,-24.23728 c 0.002,-0.0437 0.003,-0.0873 0.003,-0.13074 0.002,-0.19014 -0.009,-0.37727 -0.0294,-0.56224 -0.007,-0.0616 -0.0193,-0.12145 -0.0284,-0.18242 -0.0182,-0.1216 -0.0377,-0.24247 -0.0651,-0.36122 -0.0162,-0.07 -0.0365,-0.13827 -0.0558,-0.20722 -0.0306,-0.10953 -0.0635,-0.21797 -0.1018,-0.32453 -0.0243,-0.0676 -0.0503,-0.13418 -0.0775,-0.2005 -0.043,-0.10477 -0.0903,-0.20717 -0.14056,-0.30851 -0.0308,-0.0621 -0.0611,-0.12424 -0.0946,-0.185 -0.0569,-0.10346 -0.11921,-0.20359 -0.18345,-0.30282 -0.0349,-0.054 -0.0674,-0.10911 -0.10439,-0.16175 -0.0898,-0.12769 -0.18623,-0.2506 -0.28784,-0.37 -0.0158,-0.0185 -0.0294,-0.0385 -0.0455,-0.0568 -0.1218,-0.13911 -0.25224,-0.27153 -0.38913,-0.39791 -0.0323,-0.0299 -0.0676,-0.0567 -0.10076,-0.0858 -0.10599,-0.0931 -0.21433,-0.18364 -0.32815,-0.26872 -0.0153,-0.0114 -0.0285,-0.0249 -0.0439,-0.0362 -4.2e-4,0.002 -10e-4,0.003 -0.002,0.005 -0.92935,-0.68008 -2.10106,-1.09089 -3.38223,-1.09089 z"
          />
        </g>
        <g
          id="head"
          transform="translate(-54.153589,-36.361506)"
          style={{
            display: 'inline',
          }}
        >
          <g id="skin">
            <ellipse
              style={{
                fontVariationSettings: 'normal',
                display: 'inline',
                opacity: 1,
                fill: '#ffc494',
                fillOpacity: 1,
                stroke: '#000000',
                strokeWidth: 0.604065,
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              id="path17"
              cx={105.83346}
              cy={114.7863}
              rx={13.862974}
              ry={14.627095}
            />
            <path
              id="path25"
              style={{
                fontVariationSettings: 'normal',
                opacity: 1,
                vectorEffect: 'none',
                fill: '#ffc494',
                fillOpacity: 1,
                stroke: '#000000',
                strokeWidth: 0.604065,
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
                InkscapeStroke: 'none',
                stopColor: '#000000',
              }}
              d="m 91.156755,111.16783 a 4.0804261,3.0203239 72.853214 0 0 -0.756261,0.0991 4.0804261,3.0203239 72.853214 0 0 -1.683005,4.78946 4.0804261,3.0203239 72.853214 0 0 3.875101,3.06339 13.862974,14.627094 0 0 1 -0.622354,-4.33347 13.862974,14.627094 0 0 1 0.356895,-3.29758 4.0804261,3.0203239 72.853214 0 0 -1.170376,-0.32089 z"
            />
            <path
              id="path26"
              style={{
                fontVariationSettings: 'normal',
                opacity: 1,
                vectorEffect: 'none',
                fill: '#ffc494',
                fillOpacity: 1,
                stroke: '#000000',
                strokeWidth: 0.604065,
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
                InkscapeStroke: 'none',
                stopColor: '#000000',
              }}
              d="m 120.50991,111.16784 a 3.0203239,4.0804261 17.146786 0 1 0.75626,0.0991 3.0203239,4.0804261 17.146786 0 1 1.68301,4.78944 3.0203239,4.0804261 17.146786 0 1 -3.87511,3.06339 13.862974,14.627094 0 0 0 0.62236,-4.33346 13.862974,14.627094 0 0 0 -0.35689,-3.29757 3.0203239,4.0804261 17.146786 0 1 1.17037,-0.32091 z"
            />
          </g>
          <path
            style={{
              fontVariationSettings: 'normal',
              opacity: 1,
              fill: '#ffffff',
              fillOpacity: 1,
              stroke: '#000000',
              strokeWidth: 0.529167,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m -3.1358677,133.19566 c -1.2e-6,-0.46303 1.5679346,-0.0221 3.135883923008,-0.0221 C 1.5679656,133.1736 3.135842,132.73264 3.1358418,133.19567 c -2e-7,0.46303 -1.5679088,1.83002 -3.135858746363,1.83 C -1.5679669,135.02566 -3.1358664,133.65868 -3.1358677,133.19566 Z"
            id="mouth"
            transform="matrix(1.1415397,0,0,1.1415397,105.83335,-28.528043)"
          >
            <animate
              attributeName="d"
              values="m -4.0054485,133.17697 c -1.2e-6,-0.46303 1.3279811,0.87016 2.8959305,0.87016 1.56794935,4e-5 2.03776224,-0.52647 2.03776204,-0.0634 -2e-7,0.46303 0.63968896,1.042 -0.928260986363,1.04198 C -1.5679669,135.02566 -4.0054472,133.63999 -4.0054485,133.17697 Z; m -4.0054485,133.17697 c -1.2e-6,-0.46303 1.3279811,0.87016 2.8959305,0.87016 1.56794935,4e-5 2.03776224,-0.52647 2.03776204,-0.0634 -2e-7,0.46303 0.63968896,1.042 -0.928260986363,1.04198 C -1.5679669,135.02566 -4.0054472,133.63999 -4.0054485,133.17697 Z; m -3.1358677,133.19566 c -1.2e-6,-0.46303 1.5679346,-0.0221 3.135883923008,-0.0221 C 1.5679656,133.1736 3.135842,132.73264 3.1358418,133.19567 c -2e-7,0.46303 -1.5679088,1.83002 -3.135858746363,1.83 C -1.5679669,135.02566 -3.1358664,133.65868 -3.1358677,133.19566 Z;  m -3.1358677,133.19566 c -1.2e-6,-0.46303 1.5679346,-0.0221 3.135883923008,-0.0221 C 1.5679656,133.1736 3.135842,132.73264 3.1358418,133.19567 c -2e-7,0.46303 -1.5679088,1.83002 -3.135858746363,1.83 C -1.5679669,135.02566 -3.1358664,133.65868 -3.1358677,133.19566 Z; m -4.0054485,133.17697 c -1.2e-6,-0.46303 1.3279811,0.87016 2.8959305,0.87016 1.56794935,4e-5 2.03776224,-0.52647 2.03776204,-0.0634 -2e-7,0.46303 0.63968896,1.042 -0.928260986363,1.04198 C -1.5679669,135.02566 -4.0054472,133.63999 -4.0054485,133.17697 Z"
              keyTimes={`0; ${arrKeyTimes[2]}; ${arrKeyTimes[3]}; ${arrKeyTimes[4]}; 1`}
              dur={animationTime}
              repeatCount="indefinite"
            />
          </path>
          <g id="eyes" transform="translate(-0.462209)">
            <g
              id="g20"
              transform="matrix(1.1415397,0,0,1.1415397,106.29554,-28.528043)"
              style={{
                opacity: 1,
              }}
            >
              <ellipse
                style={{
                  fontVariationSettings: 'normal',
                  opacity: 1,
                  fill: '#000000',
                  fillOpacity: 1,
                  stroke: 'none',
                  strokeWidth: 0.529167,
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  strokeDasharray: 'none',
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                }}
                id="path19"
                cx={-5.2916665}
                cy={128.32291}
                rx={1.2862346}
                ry={1.3229158}
              ></ellipse>
              <ellipse
                style={{
                  fontVariationSettings: 'normal',
                  opacity: 1,
                  fill: '#ffffff',
                  fillOpacity: 1,
                  stroke: 'none',
                  strokeWidth: 0.405827,
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  strokeDasharray: 'none',
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                }}
                id="path20"
                cx={-4.8713827}
                cy={128.45941}
                rx={0.420284}
                ry={0.59531206}
              />
            </g>
            <g
              id="g23"
              transform="matrix(-1.1415397,0,0,1.1415397,106.29554,-28.528038)"
              style={{
                opacity: 1,
              }}
            >
              <ellipse
                style={{
                  fontVariationSettings: 'normal',
                  opacity: 1,
                  fill: '#000000',
                  fillOpacity: 1,
                  stroke: 'none',
                  strokeWidth: 0.529167,
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  strokeDasharray: 'none',
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                }}
                id="ellipse22"
                cx={-5.2916665}
                cy={128.32291}
                rx={1.2862346}
                ry={1.3229158}
              />
              <ellipse
                style={{
                  fontVariationSettings: 'normal',
                  opacity: 1,
                  fill: '#ffffff',
                  fillOpacity: 1,
                  stroke: 'none',
                  strokeWidth: 0.405827,
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  strokeDasharray: 'none',
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                }}
                id="ellipse23"
                cx={-4.8713827}
                cy={128.45941}
                rx={0.420284}
                ry={0.59531206}
              />
            </g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-0.462209; -1; 1; -0.462209; -0.462209"
              keyTimes={`0; ${arrKeyTimes[0]}; ${arrKeyTimes[1]}; ${arrKeyTimes[2]}; 1`}
              dur={animationTime}
              repeatCount="indefinite"
            />
          </g>
          <g id="eyebrows" transform="translate(-0.462209)">
            <path
              style={{
                fontVariationSettings: 'normal',
                opacity: 1,
                fill: '#000000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.529167,
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              d="m -4.4042094,125.8645 c -0.3362407,-0.011 -1.0087256,-0.0331 -1.6536527,0.0937 -0.6449271,0.12679 -1.2622766,0.40239 -1.8796378,0.678 0.5842883,-0.58429 1.1685748,-1.16857 1.8135034,-1.29535 0.6449285,-0.12677 1.3504724,0.20395 1.7032501,0.36932 0.3527777,0.16536 0.3527777,0.16531 0.016537,0.15429 z"
              id="path23"
              transform="matrix(1.1415397,0,0,1.1415397,106.29554,-28.528043)"
            />
            <path
              style={{
                fontVariationSettings: 'normal',
                opacity: 1,
                fill: '#000000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.529167,
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              d="m -4.4042094,125.8645 c -0.3362407,-0.011 -1.0087256,-0.0331 -1.6536527,0.0937 -0.6449271,0.12679 -1.2622766,0.40239 -1.8796378,0.678 0.5842883,-0.58429 1.1685748,-1.16857 1.8135034,-1.29535 0.6449285,-0.12677 1.3504724,0.20395 1.7032501,0.36932 0.3527777,0.16536 0.3527777,0.16531 0.016537,0.15429 z"
              id="path24"
              transform="matrix(-1.1415397,0,0,1.1415397,106.29554,-28.905584)"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-0.462209 0; -0.462209 0; -0.462209 -2; -0.462209 0"
              keyTimes={`0; ${arrKeyTimes[2]}; ${arrKeyTimes[3]}; 1`}
              dur={animationTime}
              repeatCount="indefinite"
            />
          </g>
          <g id="hair" transform="translate(0, -2)">
            <ellipse
              style={{
                fontVariationSettings: 'normal',
                opacity: 1,
                vectorEffect: 'none',
                fill: '#351800',
                fillOpacity: 1,
                stroke: '#000000',
                strokeWidth: 0.604065,
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
                InkscapeStroke: 'none',
              }}
              id="path28"
              cx={106.29554}
              cy={91.067451}
              rx={7.0399232}
              ry={7.2581158}
            />
            <path
              style={{
                fontVariationSettings: 'normal',
                opacity: 1,
                vectorEffect: 'none',
                fill: '#351800',
                fillOpacity: 1,
                stroke: '#000000',
                strokeWidth: 0.529167,
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
                InkscapeStroke: 'none',
              }}
              d="m -10.583333,128.90409 c 0,-1.51664 0,-3.03329 0.259389,-4.59238 0.259388,-1.55908 0.7781477,-3.16056 1.2969161,-4.76206 0.1247257,0.71956 0.2494515,1.43912 0.4310427,1.96141 0.1815912,0.5223 0.420035,0.84731 0.6584853,1.17233 1.7638889,0.0312 3.5277788,0.0623 4.4097227,0.0545 0.8819439,-0.008 0.8819439,-0.0546 0.8819439,-0.10133 0.1959527,-0.30943 0.3919054,-0.61886 0.5132678,-0.92288 0.1213624,-0.30402 0.1681345,-0.60263 0.2149067,-0.90124 0.1403165,0.29861 0.280633,0.59722 0.6002547,0.91684 0.31962177,0.31963 0.818501,0.66024 1.3174041,1.00086 -0.23386083,-0.34061 -0.46772166,-0.68122 -0.46771861,-1.09438 3.04e-6,-0.41316 0.23385778,-0.89884 0.46771861,-1.38454 0.31181444,0.4857 0.62362735,0.97139 0.84969382,1.36896 0.22606648,0.39756 0.36638248,0.70699 0.50669898,1.01642 2.1982917,0 4.3965835,0 6.5948752,0 0.342996,-0.73276 0.6859932,-1.46553 0.8263077,-1.94105 0.1403146,-0.47552 0.077954,-0.69378 0.015591,-0.91205 0.3741773,2.04238 0.7483534,4.08476 0.8886694,5.7285 0.1403161,1.64373 0.046774,2.88876 -0.046771,4.13381 1.605844,-3.14712 3.211689,-6.29424 3.710586,-9.38108 0.498897,-3.08683 -0.109129,-6.11326 -1.457749,-8.31936 -1.348619,-2.20611 -3.4377302,-3.59176 -6.7162145,-4.22224 -3.2784844,-0.63047 -7.746208,-0.50573 -11.0113029,0.18713 -3.265095,0.69287 -5.3273016,1.9538 -6.6870646,4.1911 -1.359763,2.2373 -2.017012,5.45081 -1.576025,8.41402 0.440987,2.96321 1.980164,5.67594 3.519371,8.38873 z"
              id="path27"
              transform="matrix(1.1415397,0,0,1.1415397,106.29554,-28.528043)"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0; 0; 0 -2;0"
              keyTimes={`0; ${arrKeyTimes[2]}; ${arrKeyTimes[3]}; 1`}
              dur={animationTime}
              repeatCount="indefinite"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Coder;
