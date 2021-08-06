import React from "react";

const LandingPage = () => {
    // useEffect(() => {
    //     window.addEventListener('mousedown', handleEvent)
    //
    //     return () => { window.removeEventListener('mousedown', handleEvent) }
    // }, []);

    // const handleEvent = () =>{
    //
    // }

    return (
        <div className="landing-page-wrapper full-box">
            <div className="grid-wrapper full-box">
                <div className="landing-page-info">
                    <div className="hi-div">
                        <div className="wobble-effect">H</div>
                        <div className="wobble-effect">i</div>
                        <div className="wobble-effect">,</div>
                    </div>
                    <div className="thejesh-div">
                        <div className="wobble-effect">I</div>
                        <div className="wobble-effect">'</div>
                        <div className="wobble-effect">m</div>
                        &nbsp;
                        <div className="wobble-effect">T</div>
                        <div className="wobble-effect">h</div>
                        <div className="wobble-effect">e</div>
                        <div className="wobble-effect">j</div>
                        <div className="wobble-effect">e</div>
                        <div className="wobble-effect">s</div>
                        <div className="wobble-effect">h</div>
                    </div>
                    <div className="nannapaneni-div">
                        <div className="wobble-effect">N</div>
                        <div className="wobble-effect">a</div>
                        <div className="wobble-effect">n</div>
                        <div className="wobble-effect">n</div>
                        <div className="wobble-effect">a</div>
                        <div className="wobble-effect">p</div>
                        <div className="wobble-effect">a</div>
                        <div className="wobble-effect">n</div>
                        <div className="wobble-effect">e</div>
                        <div className="wobble-effect">n</div>
                        <div className="wobble-effect">i</div>
                    </div>
                    <div className="profession-detail-div">
                        <div>Software Developer ( Full-Stack | Backend )</div>
                    </div>
                </div>
                <div className="profile-pic-div">
                    <div className="profile-pic-circle"/>
                    <div className="profile-pic"/>
                </div>
            </div>
            <div className="profession-cross">
                <svg width="971" height="289" viewBox="0 0 971 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="white" strokeWidth="7"
                          d="M30.944 233.056C24.992 233.056 19.328 232.192 13.952 230.464C8.576 228.928 3.968 225.472 0.128 220.096C2.432 209.152 5.312 197.152 8.768 184.096C12.416 170.848 16.256 157.504 20.288 144.064C24.32 130.624 28.256 117.856 32.096 105.76C36.128 93.472 39.68 82.72 42.752 73.504C45.824 64.288 48.224 57.472 49.952 53.056C50.72 50.944 52.16 47.776 54.272 43.552C56.384 39.136 58.976 35.104 62.048 31.456C65.12 27.808 68.576 25.984 72.416 25.984C75.104 25.984 77.792 26.944 80.48 28.864C74.528 42.688 68.48 57.952 62.336 74.656C56.384 91.36 50.624 108.64 45.056 126.496C39.488 144.16 34.4 161.44 29.792 178.336C25.184 195.232 21.344 210.592 18.272 224.416C22.88 225.184 27.008 225.568 30.656 225.568C42.944 225.568 54.752 222.688 66.08 216.928C77.6 211.36 88.256 203.68 98.048 193.888C108.032 183.904 116.768 172.576 124.256 159.904C131.744 147.04 137.504 133.504 141.536 119.296C145.76 104.896 147.872 90.592 147.872 76.384C147.872 52.96 142.4 35.776 131.456 24.832C120.512 13.888 106.304 8.41599 88.832 8.41599C76.352 8.41599 65.12 10.912 55.136 15.904C45.152 20.896 37.28 27.616 31.52 36.064C25.76 44.512 22.88 54.016 22.88 64.576C22.88 68.8 23.36 72.352 24.32 75.232C17.984 75.232 13.472 73.696 10.784 70.624C8.288 67.36 7.04 63.52 7.04 59.104C7.04 52.384 9.344 45.664 13.952 38.944C18.752 32.032 25.28 25.696 33.536 19.936C41.984 14.176 51.68 9.56799 62.624 6.11199C73.568 2.46399 85.184 0.639992 97.472 0.639992C114.752 0.639992 128.576 4.19199 138.944 11.296C149.504 18.208 157.184 27.616 161.984 39.52C166.784 51.424 169.184 64.768 169.184 79.552C169.184 96.256 166.592 112.288 161.408 127.648C156.224 142.816 149.024 156.832 139.808 169.696C130.784 182.368 120.416 193.504 108.704 203.104C96.992 212.512 84.416 219.808 70.976 224.992C57.728 230.368 44.384 233.056 30.944 233.056ZM201.292 220.672C189.58 220.672 180.748 217.408 174.796 210.88C169.035 204.544 166.155 196.672 166.155 187.264C166.155 178.624 168.267 169.504 172.492 159.904C176.908 150.304 182.668 141.28 189.772 132.832C197.068 124.384 205.036 117.568 213.676 112.384C222.316 107.008 230.86 104.32 239.308 104.32C243.724 104.32 247.756 105.472 251.404 107.776C255.244 110.08 257.164 114.784 257.164 121.888C257.164 129.184 254.956 136.096 250.54 142.624C246.316 148.96 240.652 154.624 233.548 159.616C226.636 164.608 218.956 168.736 210.508 172C202.252 175.072 193.996 176.992 185.74 177.76C185.356 179.68 185.068 181.504 184.876 183.232C184.684 184.96 184.588 186.592 184.588 188.128C184.588 194.08 186.124 199.648 189.195 204.832C192.46 209.824 198.508 212.32 207.34 212.32C215.596 212.32 223.756 210.016 231.82 205.408C239.884 200.608 247.372 194.368 254.284 186.688C261.196 179.008 267.052 170.56 271.852 161.344L275.308 163.936C270.124 175.456 263.5 185.44 255.436 193.888C247.564 202.336 238.924 208.864 229.516 213.472C220.3 218.272 210.892 220.672 201.292 220.672ZM187.18 172.288C192.364 170.56 198.22 168.064 204.748 164.8C211.276 161.344 217.516 157.312 223.468 152.704C229.612 148.096 234.604 143.008 238.444 137.44C242.476 131.872 244.492 126.016 244.492 119.872C244.492 117.76 244.108 116.128 243.34 114.976C242.572 113.824 240.94 113.248 238.444 113.248C233.836 113.248 228.94 115.072 223.756 118.72C218.572 122.176 213.58 126.784 208.78 132.544C203.98 138.304 199.66 144.64 195.82 151.552C191.98 158.464 189.1 165.376 187.18 172.288ZM284.814 219.232C278.862 219.232 274.734 216.256 272.43 210.304C270.126 204.544 268.974 196.96 268.974 187.552C268.974 187.168 269.07 184.192 269.262 178.624C269.454 172.864 269.934 163.264 270.702 149.824C271.086 144.64 271.662 141.088 272.43 139.168C273.198 137.248 275.694 136.288 279.918 136.288C283.182 136.288 285.198 136.96 285.966 138.304C286.926 139.456 287.406 141.856 287.406 145.504C287.406 151.84 286.926 159.328 285.966 167.968C285.198 176.416 284.814 184.384 284.814 191.872C284.814 197.44 285.294 201.568 286.254 204.256C287.214 206.752 288.942 208 291.438 208C294.894 208 298.734 206.08 302.958 202.24C307.182 198.208 311.502 193.024 315.918 186.688C320.334 180.16 324.462 173.248 328.302 165.952C332.334 158.656 335.886 151.648 338.958 144.928C339.342 131.872 340.686 123.232 342.99 119.008C345.486 114.592 348.558 112.384 352.206 112.384C355.854 112.384 358.446 113.728 359.982 116.416C361.71 118.912 362.574 121.216 362.574 123.328C362.574 125.824 361.71 128.416 359.982 131.104C358.446 133.792 356.814 137.44 355.086 142.048C353.358 146.656 352.494 153.28 352.494 161.92C352.494 164.992 352.782 168.256 353.358 171.712C353.934 175.168 355.182 178.048 357.102 180.352C359.022 182.656 361.998 183.808 366.03 183.808C370.062 183.808 373.902 182.272 377.55 179.2C381.39 175.936 385.134 170.368 388.782 162.496L392.526 165.376C388.302 174.976 383.598 181.408 378.414 184.672C373.422 187.936 368.622 189.568 364.014 189.568C357.678 189.568 352.398 187.264 348.174 182.656C343.95 178.048 341.166 171.04 339.822 161.632C335.214 171.04 329.742 180.16 323.406 188.992C317.262 197.632 310.83 204.832 304.11 210.592C297.39 216.352 290.958 219.232 284.814 219.232ZM414.479 220.672C402.767 220.672 393.935 217.408 387.983 210.88C382.223 204.544 379.343 196.672 379.343 187.264C379.343 178.624 381.455 169.504 385.679 159.904C390.095 150.304 395.855 141.28 402.959 132.832C410.255 124.384 418.223 117.568 426.863 112.384C435.503 107.008 444.047 104.32 452.495 104.32C456.911 104.32 460.943 105.472 464.591 107.776C468.431 110.08 470.351 114.784 470.351 121.888C470.351 129.184 468.143 136.096 463.727 142.624C459.503 148.96 453.839 154.624 446.735 159.616C439.823 164.608 432.143 168.736 423.695 172C415.439 175.072 407.183 176.992 398.927 177.76C398.543 179.68 398.255 181.504 398.063 183.232C397.871 184.96 397.775 186.592 397.775 188.128C397.775 194.08 399.311 199.648 402.383 204.832C405.647 209.824 411.695 212.32 420.527 212.32C428.783 212.32 436.943 210.016 445.007 205.408C453.071 200.608 460.559 194.368 467.471 186.688C474.383 179.008 480.239 170.56 485.039 161.344L488.495 163.936C483.311 175.456 476.687 185.44 468.623 193.888C460.751 202.336 452.111 208.864 442.703 213.472C433.487 218.272 424.079 220.672 414.479 220.672ZM400.367 172.288C405.551 170.56 411.407 168.064 417.935 164.8C424.463 161.344 430.703 157.312 436.655 152.704C442.799 148.096 447.791 143.008 451.631 137.44C455.663 131.872 457.679 126.016 457.679 119.872C457.679 117.76 457.295 116.128 456.527 114.976C455.759 113.824 454.127 113.248 451.631 113.248C447.023 113.248 442.127 115.072 436.943 118.72C431.759 122.176 426.767 126.784 421.967 132.544C417.167 138.304 412.847 144.64 409.007 151.552C405.167 158.464 402.287 165.376 400.367 172.288ZM503.185 216.64C494.929 216.64 488.977 213.76 485.329 208C481.873 202.432 480.145 195.424 480.145 186.976C480.145 177.76 481.873 166.816 485.329 154.144C488.785 141.472 493.297 128.128 498.865 114.112C504.625 100.096 510.865 86.464 517.585 73.216C524.305 59.776 531.025 47.584 537.745 36.64C544.465 25.696 550.609 16.96 556.177 10.432C561.937 3.90399 566.449 0.639992 569.713 0.639992C571.825 0.639992 573.553 1.88799 574.897 4.384C576.241 6.68799 577.297 9.56799 578.065 13.024C578.833 16.288 579.217 19.264 579.217 21.952C579.217 27.136 577.873 33.952 575.185 42.4C572.689 50.656 569.041 59.968 564.241 70.336C559.633 80.512 554.065 90.88 547.537 101.44C541.201 111.808 534.193 121.792 526.513 131.392C519.025 140.992 511.057 149.248 502.609 156.16C501.457 161.344 500.497 166.432 499.729 171.424C499.153 176.224 498.865 180.832 498.865 185.248C498.865 200.032 503.089 207.424 511.537 207.424C516.721 207.424 521.809 205.12 526.801 200.512C531.985 195.904 536.785 190.144 541.201 183.232C545.809 176.128 549.745 168.832 553.009 161.344L557.329 163.648C549.649 179.968 541.297 192.928 532.273 202.528C523.249 211.936 513.553 216.64 503.185 216.64ZM505.201 146.368C511.921 139.648 518.449 131.968 524.785 123.328C531.121 114.496 536.977 105.376 542.353 95.968C547.921 86.56 552.817 77.44 557.041 68.608C561.265 59.776 564.529 51.904 566.833 44.992C569.137 37.888 570.289 32.416 570.289 28.576C570.289 26.656 570.001 25.408 569.425 24.832C569.041 24.256 568.657 23.968 568.273 23.968C566.737 23.968 564.049 26.464 560.209 31.456C556.561 36.256 552.241 42.784 547.249 51.04C542.257 59.296 537.169 68.704 531.985 79.264C526.801 89.824 521.809 100.864 517.009 112.384C512.401 123.904 508.465 135.232 505.201 146.368ZM567.216 217.216C558.96 217.216 553.104 214.624 549.648 209.44C546.192 204.448 544.464 198.304 544.464 191.008C544.464 185.056 545.424 178.912 547.344 172.576C549.264 166.24 551.76 160.288 554.832 154.72C558.096 149.152 561.648 144.64 565.488 141.184C569.52 137.728 573.552 136 577.584 136C579.312 136 581.328 136.48 583.632 137.44C581.904 138.976 579.792 141.856 577.296 146.08C574.992 150.112 572.784 154.816 570.672 160.192C568.56 165.376 566.736 170.56 565.2 175.744C563.856 180.928 563.184 185.344 563.184 188.992C563.184 194.752 564.144 198.976 566.064 201.664C567.984 204.16 570.48 205.408 573.552 205.408C577.584 205.408 582.384 203.296 587.952 199.072C593.52 194.656 598.992 189.088 604.368 182.368C598.992 177.952 594.768 172.192 591.696 165.088C588.816 157.792 587.376 150.4 587.376 142.912C587.376 136.576 588.432 130.624 590.544 125.056C592.848 119.488 596.112 115.072 600.336 111.808C604.56 108.352 609.648 106.624 615.6 106.624C623.472 106.624 628.752 108.736 631.44 112.96C634.128 117.184 635.472 122.464 635.472 128.8C635.472 136.288 633.648 144.64 630 153.856C626.352 162.88 621.744 171.616 616.176 180.064C619.632 181.984 623.28 182.944 627.12 182.944C631.536 182.944 636.912 181.504 643.248 178.624C649.584 175.552 654.48 170.08 657.936 162.208L661.392 165.088C657.552 174.112 652.08 180.544 644.976 184.384C638.064 188.032 631.44 189.856 625.104 189.856C619.92 189.856 615.312 188.896 611.28 186.976C604.752 195.616 597.552 202.816 589.68 208.576C582 214.336 574.512 217.216 567.216 217.216ZM609.552 174.88C614.352 167.776 618.288 160.384 621.36 152.704C624.624 144.832 626.256 137.44 626.256 130.528C626.256 124.96 625.392 120.928 623.664 118.432C622.128 115.744 620.112 114.4 617.616 114.4C613.776 114.4 609.84 117.184 605.808 122.752C601.776 128.32 599.76 135.328 599.76 143.776C599.76 149.344 600.528 155.008 602.064 160.768C603.792 166.336 606.288 171.04 609.552 174.88ZM634.387 288.64C632.851 288.64 631.411 287.776 630.067 286.048C628.531 284.512 627.379 282.784 626.611 280.864C625.843 279.136 625.459 278.08 625.459 277.696C628.147 268.288 630.835 259.84 633.523 252.352C636.019 245.056 638.611 237.472 641.299 229.6C643.795 221.92 646.291 212.896 648.787 202.528C651.283 191.968 653.875 178.912 656.563 163.36C659.251 147.808 661.939 128.512 664.627 105.472C664.819 103.744 665.203 102.496 665.779 101.728C666.355 100.96 667.795 100.576 670.099 100.576C675.091 100.576 678.643 102.016 680.755 104.896C682.867 107.584 683.923 110.56 683.923 113.824C683.923 116.512 683.347 121.312 682.195 128.224C681.043 135.136 679.411 143.296 677.299 152.704C680.563 146.368 684.595 139.936 689.395 133.408C694.387 126.88 700.051 121.408 706.387 116.992C712.723 112.576 719.635 110.368 727.123 110.368C735.571 110.368 742.483 113.44 747.859 119.584C753.427 125.536 756.211 133.408 756.211 143.2C756.211 150.688 754.483 158.656 751.027 167.104C747.763 175.36 743.059 183.232 736.915 190.72C730.963 198.016 723.859 203.968 715.603 208.576C707.347 213.184 698.227 215.488 688.243 215.488C683.251 215.488 679.219 214.912 676.147 213.76C673.075 212.608 671.539 211.456 671.539 210.304C671.539 209.536 672.211 209.056 673.555 208.864C675.091 208.864 676.819 208.864 678.739 208.864C686.419 208.864 693.715 207.04 700.627 203.392C707.731 199.552 714.067 194.56 719.635 188.416C725.203 182.272 729.523 175.456 732.595 167.968C735.859 160.48 737.491 153.088 737.491 145.792C737.491 139.648 736.147 134.464 733.459 130.24C730.963 125.824 726.835 123.616 721.075 123.616C716.083 123.616 711.091 125.248 706.099 128.512C701.299 131.584 696.691 135.616 692.275 140.608C688.051 145.408 684.211 150.496 680.755 155.872C677.491 161.056 674.995 165.76 673.267 169.984C669.811 184.384 666.355 198.208 662.899 211.456C659.443 224.896 656.083 236.992 652.819 247.744C649.747 258.688 646.963 267.616 644.467 274.528C641.779 281.44 639.571 285.664 637.843 287.2C636.883 288.16 635.731 288.64 634.387 288.64ZM796.135 220.672C784.423 220.672 775.591 217.408 769.639 210.88C763.879 204.544 760.999 196.672 760.999 187.264C760.999 178.624 763.111 169.504 767.335 159.904C771.751 150.304 777.511 141.28 784.615 132.832C791.911 124.384 799.879 117.568 808.519 112.384C817.159 107.008 825.703 104.32 834.151 104.32C838.567 104.32 842.599 105.472 846.247 107.776C850.087 110.08 852.007 114.784 852.007 121.888C852.007 129.184 849.799 136.096 845.383 142.624C841.159 148.96 835.495 154.624 828.391 159.616C821.479 164.608 813.799 168.736 805.351 172C797.095 175.072 788.839 176.992 780.583 177.76C780.199 179.68 779.911 181.504 779.719 183.232C779.527 184.96 779.431 186.592 779.431 188.128C779.431 194.08 780.967 199.648 784.039 204.832C787.303 209.824 793.351 212.32 802.183 212.32C810.439 212.32 818.599 210.016 826.663 205.408C834.727 200.608 842.215 194.368 849.127 186.688C856.039 179.008 861.895 170.56 866.695 161.344L870.151 163.936C864.967 175.456 858.343 185.44 850.279 193.888C842.407 202.336 833.767 208.864 824.359 213.472C815.143 218.272 805.735 220.672 796.135 220.672ZM782.023 172.288C787.207 170.56 793.063 168.064 799.591 164.8C806.119 161.344 812.359 157.312 818.311 152.704C824.455 148.096 829.447 143.008 833.287 137.44C837.319 131.872 839.335 126.016 839.335 119.872C839.335 117.76 838.951 116.128 838.183 114.976C837.415 113.824 835.783 113.248 833.287 113.248C828.679 113.248 823.783 115.072 818.599 118.72C813.415 122.176 808.423 126.784 803.623 132.544C798.823 138.304 794.503 144.64 790.663 151.552C786.823 158.464 783.943 165.376 782.023 172.288ZM910.762 215.488C904.234 215.488 899.05 213.76 895.21 210.304C891.562 206.848 889.738 202.336 889.738 196.768C889.738 191.008 891.082 184.96 893.77 178.624C896.458 172.288 899.05 166.048 901.546 159.904C904.234 153.568 905.578 147.904 905.578 142.912C905.578 136.768 903.754 132.256 900.106 129.376C896.65 126.304 893.098 123.52 889.45 121.024C885.034 132.352 880.426 143.104 875.626 153.28C870.826 163.456 866.89 171.136 863.818 176.32L861.226 171.424C863.914 166.432 867.37 159.136 871.594 149.536C876.01 139.936 880.33 128.992 884.554 116.704C882.634 114.784 881.674 112.48 881.674 109.792C881.674 104.032 883.306 99.328 886.57 95.68C889.834 92.032 892.234 90.208 893.77 90.208C895.882 90.208 897.034 91.168 897.226 93.088C897.61 94.816 897.802 96.16 897.802 97.12C897.802 98.08 897.226 100 896.074 102.88C895.114 105.568 894.634 107.2 894.634 107.776C894.634 110.464 896.074 112.96 898.953 115.264C902.026 117.376 905.482 119.872 909.322 122.752C913.162 125.44 916.522 128.8 919.402 132.832C922.474 136.672 924.01 141.664 924.01 147.808C924.01 153.568 922.762 159.424 920.266 165.376C917.962 171.328 915.562 176.992 913.066 182.368C910.762 187.744 909.61 192.448 909.61 196.48C909.61 199.936 910.474 202.24 912.202 203.392C913.93 204.544 915.946 205.12 918.25 205.12C922.858 205.12 927.562 203.68 932.362 200.8C937.354 197.92 942.154 194.272 946.762 189.856C951.37 185.44 955.498 180.832 959.146 176.032C962.794 171.04 965.482 166.432 967.21 162.208L970.954 165.088C967.306 173.152 962.314 181.12 955.978 188.992C949.642 196.672 942.538 203.008 934.666 208C926.986 212.992 919.018 215.488 910.762 215.488Z"
                          fill="white"/>
                </svg>

            </div>
            <div className="html-open-tag">&#60;html&#62;</div>
            <div className="body-open-tag">&#60;body&#62;</div>
            <div className="body-close-tag">&#60;/body&#62;</div>
            <div className="html-close-tag">&#60;/html&#62;</div>
        </div>
    );
}

export default LandingPage;