export default function ContainerSVG({ level = 1 }) {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 340 415"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="Container">
          <rect width="340" height="415" rx="7" fill="white" />
          <path
            id="Union"
            d="M97 7C91.4772 7 87 11.4772 87 17V30C41.1604 30 4 67.1604 4 113V388C4 400.703 14.2974 411 27 411H313C325.703 411 336 400.703 336 388V113C336 67.1604 298.84 30 253 30V17C253 11.4772 248.523 7 243 7H97Z"
            fill="#FCFCFC"
            stroke="#43B9C3"
            strokeWidth="6"
          />
          <g clipPath="url(#clip0_161_1240)">
            <svg
              width="100%"
              height="100%"
              y={200 - level * 3.1}
              viewBox="0 0 326 80">
              <path
                className="wave1"
                d="M-347 43.6961C-347 40.5803 -345.295 37.7165 -342.441 36.4667C-286.011 11.7562 -100.243 -6.97192 65.7133 15.5C236.46 38.6205 182.423 13.8519 414.792 0.209199C517.875 -2.86307 617.759 28.7929 641.254 36.8047C644.38 37.8705 646.434 40.8142 646.434 44.1165V44.1165C646.434 48.4704 642.904 52 638.55 52H-338.696C-343.282 52 -347 48.2822 -347 43.6961V43.6961Z"
                fill="#CFE8FF"
              />
              <path
                className="wave2"
                d="M-321.434 40.2941C-321.434 40.2941 114.336 6.87993 231.659 16.8613C348.982 26.8426 672 40.2941 672 40.2941V51.9999H-321.434V40.2941Z"
                fill="#80D9FF"
              />
            </svg>

            <rect
              id="level"
              x="710"
              y="409"
              width="1019"
              height={level * 3.1}
              transform="rotate(-180 710 409)"
              fill="#80D9FF"
            />
          </g>
          <g id="line">
            <rect
              x="167"
              y="409"
              width="338"
              height="8.00001"
              rx="4.00001"
              transform="rotate(-90 167 409)"
              fill="#43B9C3"
            />
          </g>
          <path
            id="Vector"
            d="M7 172H333.431"
            stroke="#43B9C3"
            strokeWidth="4"
          />
          <path
            id="Vector_2"
            d="M7 89H333.431"
            stroke="#43B9C3"
            strokeWidth="4"
          />
          <path
            id="Vector_3"
            d="M7 255H333.431"
            stroke="#43B9C3"
            strokeWidth="4"
          />
          <path
            id="Vector_4"
            d="M7 338H333.431"
            stroke="#43B9C3"
            strokeWidth="4"
          />
          <g id="75%">
            <path
              d="M50.3624 166.953C49.9944 166.953 49.6904 166.865 49.4504 166.689C49.2104 166.513 49.0664 166.281 49.0184 165.993C48.9704 165.689 49.0424 165.353 49.2344 164.985L56.4824 151.353V152.409H48.7064C48.2744 152.409 47.9384 152.297 47.6984 152.073C47.4744 151.849 47.3624 151.537 47.3624 151.137C47.3624 150.721 47.4744 150.401 47.6984 150.177C47.9384 149.953 48.2744 149.841 48.7064 149.841H57.9944C58.4264 149.841 58.7784 149.953 59.0504 150.177C59.3224 150.401 59.4584 150.721 59.4584 151.137C59.4584 151.489 59.4104 151.801 59.3144 152.073C59.2184 152.329 59.0904 152.609 58.9304 152.913L52.1144 165.945C51.9384 166.297 51.7064 166.553 51.4184 166.713C51.1464 166.873 50.7944 166.953 50.3624 166.953Z"
              fill="#43B9C3"
            />
            <path
              d="M67.969 167.001C67.121 167.001 66.257 166.889 65.377 166.665C64.497 166.441 63.689 166.097 62.953 165.633C62.649 165.441 62.441 165.217 62.329 164.961C62.233 164.689 62.209 164.425 62.257 164.169C62.321 163.897 62.441 163.673 62.617 163.497C62.809 163.305 63.033 163.193 63.289 163.161C63.561 163.129 63.857 163.201 64.177 163.377C64.769 163.713 65.369 163.969 65.977 164.145C66.585 164.321 67.233 164.409 67.921 164.409C68.593 164.409 69.169 164.289 69.649 164.049C70.129 163.809 70.497 163.473 70.753 163.041C71.009 162.609 71.137 162.105 71.137 161.529C71.137 160.633 70.865 159.913 70.321 159.369C69.777 158.809 69.033 158.529 68.089 158.529C67.577 158.529 67.081 158.617 66.601 158.793C66.121 158.953 65.649 159.241 65.185 159.657C65.041 159.785 64.857 159.913 64.633 160.041C64.409 160.153 64.169 160.209 63.913 160.209C63.513 160.209 63.209 160.105 63.001 159.897C62.793 159.689 62.689 159.401 62.689 159.033V151.185C62.689 150.753 62.801 150.425 63.025 150.201C63.265 149.961 63.601 149.841 64.033 149.841H71.929C72.361 149.841 72.689 149.953 72.913 150.177C73.153 150.385 73.273 150.697 73.273 151.113C73.273 151.513 73.153 151.825 72.913 152.049C72.689 152.273 72.361 152.385 71.929 152.385H65.689V157.761H64.897C65.313 157.201 65.865 156.769 66.553 156.465C67.241 156.161 67.993 156.009 68.809 156.009C69.881 156.009 70.809 156.241 71.593 156.705C72.393 157.153 73.009 157.785 73.441 158.601C73.889 159.401 74.113 160.337 74.113 161.409C74.113 162.513 73.865 163.489 73.369 164.337C72.873 165.169 72.161 165.825 71.233 166.305C70.321 166.769 69.233 167.001 67.969 167.001Z"
              fill="#43B9C3"
            />
            <path
              d="M82.9116 166.569C82.7516 166.857 82.5516 167.041 82.3116 167.121C82.0876 167.217 81.8556 167.233 81.6156 167.169C81.3916 167.121 81.1996 167.009 81.0396 166.833C80.8796 166.673 80.7836 166.473 80.7516 166.233C80.7196 165.977 80.7836 165.705 80.9436 165.417L89.7996 150.057C89.9596 149.769 90.1516 149.577 90.3756 149.481C90.6156 149.385 90.8476 149.369 91.0716 149.433C91.2956 149.481 91.4876 149.593 91.6476 149.769C91.8076 149.945 91.9036 150.161 91.9356 150.417C91.9836 150.657 91.9276 150.913 91.7676 151.185L82.9116 166.569ZM80.3436 159.945C78.9996 159.945 77.9516 159.481 77.1996 158.553C76.4476 157.625 76.0716 156.361 76.0716 154.761C76.0716 153.689 76.2396 152.769 76.5756 152.001C76.9116 151.233 77.3996 150.641 78.0396 150.225C78.6796 149.809 79.4476 149.601 80.3436 149.601C81.6876 149.601 82.7356 150.065 83.4876 150.993C84.2396 151.905 84.6156 153.161 84.6156 154.761C84.6156 155.833 84.4476 156.761 84.1116 157.545C83.7756 158.313 83.2876 158.905 82.6476 159.321C82.0076 159.737 81.2396 159.945 80.3436 159.945ZM80.3436 157.929C80.7276 157.929 81.0556 157.817 81.3276 157.593C81.5996 157.353 81.8076 157.001 81.9516 156.537C82.0956 156.073 82.1676 155.481 82.1676 154.761C82.1676 153.689 82.0076 152.897 81.6876 152.385C81.3676 151.873 80.9196 151.617 80.3436 151.617C79.9596 151.617 79.6316 151.729 79.3596 151.953C79.0876 152.177 78.8796 152.521 78.7356 152.985C78.5916 153.449 78.5196 154.041 78.5196 154.761C78.5196 155.849 78.6796 156.649 78.9996 157.161C79.3196 157.673 79.7676 157.929 80.3436 157.929ZM92.3916 167.001C91.0476 167.001 89.9996 166.537 89.2476 165.609C88.4956 164.681 88.1196 163.417 88.1196 161.817C88.1196 160.745 88.2876 159.825 88.6236 159.057C88.9596 158.289 89.4476 157.697 90.0876 157.281C90.7276 156.865 91.4956 156.657 92.3916 156.657C93.7356 156.657 94.7836 157.121 95.5356 158.049C96.2876 158.961 96.6636 160.217 96.6636 161.817C96.6636 162.889 96.4956 163.817 96.1596 164.601C95.8236 165.369 95.3356 165.961 94.6956 166.377C94.0556 166.793 93.2876 167.001 92.3916 167.001ZM92.3916 164.985C92.7756 164.985 93.1036 164.873 93.3756 164.649C93.6476 164.425 93.8556 164.081 93.9996 163.617C94.1436 163.137 94.2156 162.537 94.2156 161.817C94.2156 160.745 94.0556 159.953 93.7356 159.441C93.4156 158.929 92.9676 158.673 92.3916 158.673C92.0076 158.673 91.6796 158.785 91.4076 159.009C91.1356 159.233 90.9276 159.577 90.7836 160.041C90.6396 160.505 90.5676 161.097 90.5676 161.817C90.5676 162.905 90.7276 163.705 91.0476 164.217C91.3676 164.729 91.8156 164.985 92.3916 164.985Z"
              fill="#43B9C3"
            />
          </g>
          <g id="100%">
            <path
              d="M49.9784 81.7615C49.5624 81.7615 49.2344 81.6495 48.9944 81.4255C48.7704 81.1855 48.6584 80.8655 48.6584 80.4655C48.6584 80.0495 48.7704 79.7375 48.9944 79.5295C49.2344 79.3215 49.5624 79.2175 49.9784 79.2175H52.6664V67.4335H54.1544L50.6264 69.5695C50.3224 69.7455 50.0344 69.8175 49.7624 69.7855C49.5064 69.7375 49.2824 69.6255 49.0904 69.4495C48.9144 69.2575 48.7944 69.0335 48.7304 68.7775C48.6664 68.5215 48.6824 68.2655 48.7784 68.0095C48.8904 67.7375 49.0984 67.5135 49.4024 67.3375L52.7144 65.3455C53.0344 65.1535 53.3544 64.9935 53.6744 64.8655C53.9944 64.7215 54.2904 64.6495 54.5624 64.6495C54.8984 64.6495 55.1784 64.7455 55.4024 64.9375C55.6264 65.1135 55.7384 65.4095 55.7384 65.8255V79.2175H58.1864C58.6024 79.2175 58.9224 79.3215 59.1464 79.5295C59.3864 79.7375 59.5064 80.0495 59.5064 80.4655C59.5064 80.8815 59.3864 81.2015 59.1464 81.4255C58.9224 81.6495 58.6024 81.7615 58.1864 81.7615H49.9784Z"
              fill="#43B9C3"
            />
            <path
              d="M67.825 82.0015C65.825 82.0015 64.297 81.2495 63.241 79.7455C62.185 78.2255 61.657 76.0655 61.657 73.2655C61.657 71.3775 61.889 69.7935 62.353 68.5135C62.833 67.2175 63.529 66.2415 64.441 65.5855C65.369 64.9295 66.497 64.6015 67.825 64.6015C69.841 64.6015 71.369 65.3375 72.409 66.8095C73.465 68.2815 73.993 70.4255 73.993 73.2415C73.993 75.1135 73.753 76.7055 73.273 78.0175C72.809 79.3135 72.121 80.3055 71.209 80.9935C70.297 81.6655 69.169 82.0015 67.825 82.0015ZM67.825 79.4815C68.913 79.4815 69.713 78.9775 70.225 77.9695C70.753 76.9615 71.017 75.3855 71.017 73.2415C71.017 71.0975 70.753 69.5455 70.225 68.5855C69.713 67.6095 68.913 67.1215 67.825 67.1215C66.753 67.1215 65.953 67.6095 65.425 68.5855C64.897 69.5455 64.633 71.0975 64.633 73.2415C64.633 75.3855 64.897 76.9615 65.425 77.9695C65.953 78.9775 66.753 79.4815 67.825 79.4815Z"
              fill="#43B9C3"
            />
            <path
              d="M82.2156 82.0015C80.2156 82.0015 78.6876 81.2495 77.6316 79.7455C76.5756 78.2255 76.0476 76.0655 76.0476 73.2655C76.0476 71.3775 76.2796 69.7935 76.7436 68.5135C77.2236 67.2175 77.9196 66.2415 78.8316 65.5855C79.7596 64.9295 80.8876 64.6015 82.2156 64.6015C84.2316 64.6015 85.7596 65.3375 86.7996 66.8095C87.8556 68.2815 88.3836 70.4255 88.3836 73.2415C88.3836 75.1135 88.1436 76.7055 87.6636 78.0175C87.1996 79.3135 86.5116 80.3055 85.5996 80.9935C84.6876 81.6655 83.5596 82.0015 82.2156 82.0015ZM82.2156 79.4815C83.3036 79.4815 84.1036 78.9775 84.6156 77.9695C85.1436 76.9615 85.4076 75.3855 85.4076 73.2415C85.4076 71.0975 85.1436 69.5455 84.6156 68.5855C84.1036 67.6095 83.3036 67.1215 82.2156 67.1215C81.1436 67.1215 80.3436 67.6095 79.8156 68.5855C79.2876 69.5455 79.0236 71.0975 79.0236 73.2415C79.0236 75.3855 79.2876 76.9615 79.8156 77.9695C80.3436 78.9775 81.1436 79.4815 82.2156 79.4815Z"
              fill="#43B9C3"
            />
            <path
              d="M97.3022 81.5695C97.1422 81.8575 96.9422 82.0415 96.7022 82.1215C96.4782 82.2175 96.2462 82.2335 96.0062 82.1695C95.7822 82.1215 95.5902 82.0095 95.4302 81.8335C95.2702 81.6735 95.1742 81.4735 95.1422 81.2335C95.1102 80.9775 95.1742 80.7055 95.3342 80.4175L104.19 65.0575C104.35 64.7695 104.542 64.5775 104.766 64.4815C105.006 64.3855 105.238 64.3695 105.462 64.4335C105.686 64.4815 105.878 64.5935 106.038 64.7695C106.198 64.9455 106.294 65.1615 106.326 65.4175C106.374 65.6575 106.318 65.9135 106.158 66.1855L97.3022 81.5695ZM94.7342 74.9455C93.3902 74.9455 92.3422 74.4815 91.5902 73.5535C90.8382 72.6255 90.4622 71.3615 90.4622 69.7615C90.4622 68.6895 90.6302 67.7695 90.9662 67.0015C91.3022 66.2335 91.7902 65.6415 92.4302 65.2255C93.0702 64.8095 93.8382 64.6015 94.7342 64.6015C96.0782 64.6015 97.1262 65.0655 97.8782 65.9935C98.6302 66.9055 99.0062 68.1615 99.0062 69.7615C99.0062 70.8335 98.8382 71.7615 98.5022 72.5455C98.1662 73.3135 97.6782 73.9055 97.0382 74.3215C96.3982 74.7375 95.6302 74.9455 94.7342 74.9455ZM94.7342 72.9295C95.1182 72.9295 95.4462 72.8175 95.7182 72.5935C95.9902 72.3535 96.1982 72.0015 96.3422 71.5375C96.4862 71.0735 96.5582 70.4815 96.5582 69.7615C96.5582 68.6895 96.3982 67.8975 96.0782 67.3855C95.7582 66.8735 95.3102 66.6175 94.7342 66.6175C94.3502 66.6175 94.0222 66.7295 93.7502 66.9535C93.4782 67.1775 93.2702 67.5215 93.1262 67.9855C92.9822 68.4495 92.9102 69.0415 92.9102 69.7615C92.9102 70.8495 93.0702 71.6495 93.3902 72.1615C93.7102 72.6735 94.1582 72.9295 94.7342 72.9295ZM106.782 82.0015C105.438 82.0015 104.39 81.5375 103.638 80.6095C102.886 79.6815 102.51 78.4175 102.51 76.8175C102.51 75.7455 102.678 74.8255 103.014 74.0575C103.35 73.2895 103.838 72.6975 104.478 72.2815C105.118 71.8655 105.886 71.6575 106.782 71.6575C108.126 71.6575 109.174 72.1215 109.926 73.0495C110.678 73.9615 111.054 75.2175 111.054 76.8175C111.054 77.8895 110.886 78.8175 110.55 79.6015C110.214 80.3695 109.726 80.9615 109.086 81.3775C108.446 81.7935 107.678 82.0015 106.782 82.0015ZM106.782 79.9855C107.166 79.9855 107.494 79.8735 107.766 79.6495C108.038 79.4255 108.246 79.0815 108.39 78.6175C108.534 78.1375 108.606 77.5375 108.606 76.8175C108.606 75.7455 108.446 74.9535 108.126 74.4415C107.806 73.9295 107.358 73.6735 106.782 73.6735C106.398 73.6735 106.07 73.7855 105.798 74.0095C105.526 74.2335 105.318 74.5775 105.174 75.0415C105.03 75.5055 104.958 76.0975 104.958 76.8175C104.958 77.9055 105.118 78.7055 105.438 79.2175C105.758 79.7295 106.206 79.9855 106.782 79.9855Z"
              fill="#43B9C3"
            />
          </g>
          <g id="50%">
            <path
              d="M53.5784 251.144C52.7304 251.144 51.8664 251.032 50.9864 250.808C50.1064 250.584 49.2984 250.24 48.5624 249.776C48.2584 249.584 48.0504 249.36 47.9384 249.104C47.8424 248.832 47.8184 248.568 47.8664 248.312C47.9304 248.04 48.0504 247.816 48.2264 247.64C48.4184 247.448 48.6424 247.336 48.8984 247.304C49.1704 247.272 49.4664 247.344 49.7864 247.52C50.3784 247.856 50.9784 248.112 51.5864 248.288C52.1944 248.464 52.8424 248.552 53.5304 248.552C54.2024 248.552 54.7784 248.432 55.2584 248.192C55.7384 247.952 56.1064 247.616 56.3624 247.184C56.6184 246.752 56.7464 246.248 56.7464 245.672C56.7464 244.776 56.4744 244.056 55.9304 243.512C55.3864 242.952 54.6424 242.672 53.6984 242.672C53.1864 242.672 52.6904 242.76 52.2104 242.936C51.7304 243.096 51.2584 243.384 50.7944 243.8C50.6504 243.928 50.4664 244.056 50.2424 244.184C50.0184 244.296 49.7784 244.352 49.5224 244.352C49.1224 244.352 48.8184 244.248 48.6104 244.04C48.4024 243.832 48.2984 243.544 48.2984 243.176V235.328C48.2984 234.896 48.4104 234.568 48.6344 234.344C48.8744 234.104 49.2104 233.984 49.6424 233.984H57.5384C57.9704 233.984 58.2984 234.096 58.5224 234.32C58.7624 234.528 58.8824 234.84 58.8824 235.256C58.8824 235.656 58.7624 235.968 58.5224 236.192C58.2984 236.416 57.9704 236.528 57.5384 236.528H51.2984V241.904H50.5064C50.9224 241.344 51.4744 240.912 52.1624 240.608C52.8504 240.304 53.6024 240.152 54.4184 240.152C55.4904 240.152 56.4184 240.384 57.2024 240.848C58.0024 241.296 58.6184 241.928 59.0504 242.744C59.4984 243.544 59.7224 244.48 59.7224 245.552C59.7224 246.656 59.4744 247.632 58.9784 248.48C58.4824 249.312 57.7704 249.968 56.8424 250.448C55.9304 250.912 54.8424 251.144 53.5784 251.144Z"
              fill="#43B9C3"
            />
            <path
              d="M67.825 251.144C65.825 251.144 64.297 250.392 63.241 248.888C62.185 247.368 61.657 245.208 61.657 242.408C61.657 240.52 61.889 238.936 62.353 237.656C62.833 236.36 63.529 235.384 64.441 234.728C65.369 234.072 66.497 233.744 67.825 233.744C69.841 233.744 71.369 234.48 72.409 235.952C73.465 237.424 73.993 239.568 73.993 242.384C73.993 244.256 73.753 245.848 73.273 247.16C72.809 248.456 72.121 249.448 71.209 250.136C70.297 250.808 69.169 251.144 67.825 251.144ZM67.825 248.624C68.913 248.624 69.713 248.12 70.225 247.112C70.753 246.104 71.017 244.528 71.017 242.384C71.017 240.24 70.753 238.688 70.225 237.728C69.713 236.752 68.913 236.264 67.825 236.264C66.753 236.264 65.953 236.752 65.425 237.728C64.897 238.688 64.633 240.24 64.633 242.384C64.633 244.528 64.897 246.104 65.425 247.112C65.953 248.12 66.753 248.624 67.825 248.624Z"
              fill="#43B9C3"
            />
            <path
              d="M82.9116 250.712C82.7516 251 82.5516 251.184 82.3116 251.264C82.0876 251.36 81.8556 251.376 81.6156 251.312C81.3916 251.264 81.1996 251.152 81.0396 250.976C80.8796 250.816 80.7836 250.616 80.7516 250.376C80.7196 250.12 80.7836 249.848 80.9436 249.56L89.7996 234.2C89.9596 233.912 90.1516 233.72 90.3756 233.624C90.6156 233.528 90.8476 233.512 91.0716 233.576C91.2956 233.624 91.4876 233.736 91.6476 233.912C91.8076 234.088 91.9036 234.304 91.9356 234.56C91.9836 234.8 91.9276 235.056 91.7676 235.328L82.9116 250.712ZM80.3436 244.088C78.9996 244.088 77.9516 243.624 77.1996 242.696C76.4476 241.768 76.0716 240.504 76.0716 238.904C76.0716 237.832 76.2396 236.912 76.5756 236.144C76.9116 235.376 77.3996 234.784 78.0396 234.368C78.6796 233.952 79.4476 233.744 80.3436 233.744C81.6876 233.744 82.7356 234.208 83.4876 235.136C84.2396 236.048 84.6156 237.304 84.6156 238.904C84.6156 239.976 84.4476 240.904 84.1116 241.688C83.7756 242.456 83.2876 243.048 82.6476 243.464C82.0076 243.88 81.2396 244.088 80.3436 244.088ZM80.3436 242.072C80.7276 242.072 81.0556 241.96 81.3276 241.736C81.5996 241.496 81.8076 241.144 81.9516 240.68C82.0956 240.216 82.1676 239.624 82.1676 238.904C82.1676 237.832 82.0076 237.04 81.6876 236.528C81.3676 236.016 80.9196 235.76 80.3436 235.76C79.9596 235.76 79.6316 235.872 79.3596 236.096C79.0876 236.32 78.8796 236.664 78.7356 237.128C78.5916 237.592 78.5196 238.184 78.5196 238.904C78.5196 239.992 78.6796 240.792 78.9996 241.304C79.3196 241.816 79.7676 242.072 80.3436 242.072ZM92.3916 251.144C91.0476 251.144 89.9996 250.68 89.2476 249.752C88.4956 248.824 88.1196 247.56 88.1196 245.96C88.1196 244.888 88.2876 243.968 88.6236 243.2C88.9596 242.432 89.4476 241.84 90.0876 241.424C90.7276 241.008 91.4956 240.8 92.3916 240.8C93.7356 240.8 94.7836 241.264 95.5356 242.192C96.2876 243.104 96.6636 244.36 96.6636 245.96C96.6636 247.032 96.4956 247.96 96.1596 248.744C95.8236 249.512 95.3356 250.104 94.6956 250.52C94.0556 250.936 93.2876 251.144 92.3916 251.144ZM92.3916 249.128C92.7756 249.128 93.1036 249.016 93.3756 248.792C93.6476 248.568 93.8556 248.224 93.9996 247.76C94.1436 247.28 94.2156 246.68 94.2156 245.96C94.2156 244.888 94.0556 244.096 93.7356 243.584C93.4156 243.072 92.9676 242.816 92.3916 242.816C92.0076 242.816 91.6796 242.928 91.4076 243.152C91.1356 243.376 90.9276 243.72 90.7836 244.184C90.6396 244.648 90.5676 245.24 90.5676 245.96C90.5676 247.048 90.7276 247.848 91.0476 248.36C91.3676 248.872 91.8156 249.128 92.3916 249.128Z"
              fill="#43B9C3"
            />
          </g>
          <g id="25%">
            <path
              d="M49.4264 331.477C48.9144 331.477 48.5384 331.365 48.2984 331.141C48.0744 330.901 47.9624 330.557 47.9624 330.109C47.9624 329.837 48.0344 329.573 48.1784 329.317C48.3224 329.061 48.5304 328.789 48.8024 328.501L53.6264 323.365C54.3624 322.597 54.8904 321.901 55.2104 321.277C55.5304 320.637 55.6904 319.997 55.6904 319.357C55.6904 318.557 55.4344 317.949 54.9224 317.533C54.4264 317.117 53.6984 316.909 52.7384 316.909C52.1944 316.909 51.6504 316.989 51.1064 317.149C50.5624 317.293 50.0104 317.549 49.4504 317.917C49.1624 318.109 48.8904 318.189 48.6344 318.157C48.3944 318.125 48.1784 318.021 47.9864 317.845C47.8104 317.669 47.6904 317.453 47.6264 317.197C47.5624 316.941 47.5704 316.685 47.6504 316.429C47.7464 316.157 47.9384 315.925 48.2264 315.733C48.9144 315.269 49.6824 314.917 50.5304 314.677C51.3944 314.437 52.2584 314.317 53.1224 314.317C54.3384 314.317 55.3624 314.501 56.1944 314.869C57.0264 315.237 57.6584 315.773 58.0904 316.477C58.5224 317.181 58.7384 318.037 58.7384 319.045C58.7384 319.717 58.6264 320.373 58.4024 321.013C58.1944 321.653 57.8664 322.301 57.4184 322.957C56.9864 323.613 56.4184 324.309 55.7144 325.045L51.2024 329.749V328.933H58.2584C58.6904 328.933 59.0184 329.037 59.2424 329.245C59.4664 329.453 59.5784 329.765 59.5784 330.181C59.5784 330.597 59.4664 330.917 59.2424 331.141C59.0184 331.365 58.6904 331.477 58.2584 331.477H49.4264Z"
              fill="#43B9C3"
            />
            <path
              d="M67.969 331.717C67.121 331.717 66.257 331.605 65.377 331.381C64.497 331.157 63.689 330.813 62.953 330.349C62.649 330.157 62.441 329.933 62.329 329.677C62.233 329.405 62.209 329.141 62.257 328.885C62.321 328.613 62.441 328.389 62.617 328.213C62.809 328.021 63.033 327.909 63.289 327.877C63.561 327.845 63.857 327.917 64.177 328.093C64.769 328.429 65.369 328.685 65.977 328.861C66.585 329.037 67.233 329.125 67.921 329.125C68.593 329.125 69.169 329.005 69.649 328.765C70.129 328.525 70.497 328.189 70.753 327.757C71.009 327.325 71.137 326.821 71.137 326.245C71.137 325.349 70.865 324.629 70.321 324.085C69.777 323.525 69.033 323.245 68.089 323.245C67.577 323.245 67.081 323.333 66.601 323.509C66.121 323.669 65.649 323.957 65.185 324.373C65.041 324.501 64.857 324.629 64.633 324.757C64.409 324.869 64.169 324.925 63.913 324.925C63.513 324.925 63.209 324.821 63.001 324.613C62.793 324.405 62.689 324.117 62.689 323.749V315.901C62.689 315.469 62.801 315.141 63.025 314.917C63.265 314.677 63.601 314.557 64.033 314.557H71.929C72.361 314.557 72.689 314.669 72.913 314.893C73.153 315.101 73.273 315.413 73.273 315.829C73.273 316.229 73.153 316.541 72.913 316.765C72.689 316.989 72.361 317.101 71.929 317.101H65.689V322.477H64.897C65.313 321.917 65.865 321.485 66.553 321.181C67.241 320.877 67.993 320.725 68.809 320.725C69.881 320.725 70.809 320.957 71.593 321.421C72.393 321.869 73.009 322.501 73.441 323.317C73.889 324.117 74.113 325.053 74.113 326.125C74.113 327.229 73.865 328.205 73.369 329.053C72.873 329.885 72.161 330.541 71.233 331.021C70.321 331.485 69.233 331.717 67.969 331.717Z"
              fill="#43B9C3"
            />
            <path
              d="M82.9116 331.285C82.7516 331.573 82.5516 331.757 82.3116 331.837C82.0876 331.933 81.8556 331.949 81.6156 331.885C81.3916 331.837 81.1996 331.725 81.0396 331.549C80.8796 331.389 80.7836 331.189 80.7516 330.949C80.7196 330.693 80.7836 330.421 80.9436 330.133L89.7996 314.773C89.9596 314.485 90.1516 314.293 90.3756 314.197C90.6156 314.101 90.8476 314.085 91.0716 314.149C91.2956 314.197 91.4876 314.309 91.6476 314.485C91.8076 314.661 91.9036 314.877 91.9356 315.133C91.9836 315.373 91.9276 315.629 91.7676 315.901L82.9116 331.285ZM80.3436 324.661C78.9996 324.661 77.9516 324.197 77.1996 323.269C76.4476 322.341 76.0716 321.077 76.0716 319.477C76.0716 318.405 76.2396 317.485 76.5756 316.717C76.9116 315.949 77.3996 315.357 78.0396 314.941C78.6796 314.525 79.4476 314.317 80.3436 314.317C81.6876 314.317 82.7356 314.781 83.4876 315.709C84.2396 316.621 84.6156 317.877 84.6156 319.477C84.6156 320.549 84.4476 321.477 84.1116 322.261C83.7756 323.029 83.2876 323.621 82.6476 324.037C82.0076 324.453 81.2396 324.661 80.3436 324.661ZM80.3436 322.645C80.7276 322.645 81.0556 322.533 81.3276 322.309C81.5996 322.069 81.8076 321.717 81.9516 321.253C82.0956 320.789 82.1676 320.197 82.1676 319.477C82.1676 318.405 82.0076 317.613 81.6876 317.101C81.3676 316.589 80.9196 316.333 80.3436 316.333C79.9596 316.333 79.6316 316.445 79.3596 316.669C79.0876 316.893 78.8796 317.237 78.7356 317.701C78.5916 318.165 78.5196 318.757 78.5196 319.477C78.5196 320.565 78.6796 321.365 78.9996 321.877C79.3196 322.389 79.7676 322.645 80.3436 322.645ZM92.3916 331.717C91.0476 331.717 89.9996 331.253 89.2476 330.325C88.4956 329.397 88.1196 328.133 88.1196 326.533C88.1196 325.461 88.2876 324.541 88.6236 323.773C88.9596 323.005 89.4476 322.413 90.0876 321.997C90.7276 321.581 91.4956 321.373 92.3916 321.373C93.7356 321.373 94.7836 321.837 95.5356 322.765C96.2876 323.677 96.6636 324.933 96.6636 326.533C96.6636 327.605 96.4956 328.533 96.1596 329.317C95.8236 330.085 95.3356 330.677 94.6956 331.093C94.0556 331.509 93.2876 331.717 92.3916 331.717ZM92.3916 329.701C92.7756 329.701 93.1036 329.589 93.3756 329.365C93.6476 329.141 93.8556 328.797 93.9996 328.333C94.1436 327.853 94.2156 327.253 94.2156 326.533C94.2156 325.461 94.0556 324.669 93.7356 324.157C93.4156 323.645 92.9676 323.389 92.3916 323.389C92.0076 323.389 91.6796 323.501 91.4076 323.725C91.1356 323.949 90.9276 324.293 90.7836 324.757C90.6396 325.221 90.5676 325.813 90.5676 326.533C90.5676 327.621 90.7276 328.421 91.0476 328.933C91.3676 329.445 91.8156 329.701 92.3916 329.701Z"
              fill="#43B9C3"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_161_1240">
            <path
              d="M7 112C7 67.8172 42.8172 32 87 32H253C297.183 32 333 67.8172 333 112V389C333 400.046 324.046 409 313 409H27C15.9543 409 7 400.046 7 389V112Z"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>

      <style jsx>{`
        .wave1 {
          -webkit-animation: animate 8s ease-in-out alternate infinite;
          animation: animate 8s ease-in-out alternate infinite;
        }
        .wave2 {
          -webkit-animation: animate 9s ease-in-out alternate infinite;
          animation: animate 9s ease-in-out alternate infinite;
          transform: translateY(-100rem);
          -webkit-transform: translateY(-100rem);
        }

        @-webkit-keyframes animate {
          0% {
            -webkit-transform: translateX(16rem);
            transform: translateX(16rem);
          }
          100% {
            -webkit-transform: translateX(-16rem);
            transform: translateX(-16rem);
          }
        }
        @keyframes animate {
          0% {
            -webkit-transform: translateX(16rem);
            transform: translateX(16rem);
          }
          100% {
            -webkit-transform: translateX(-16rem);
            transform: translateX(-16rem);
          }
        }
      `}</style>
    </>
  );
}