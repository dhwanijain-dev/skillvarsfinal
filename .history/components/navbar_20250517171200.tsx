'use client'
import Image from 'next/image'
const navbar = () => {
  return (
    <nav>
          <nav>
              <div class="logo">
                  <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 423 192"
                      style="enable-background:new 0 0 423 192;" xml:space="preserve">

                      <circle class="st0" cx="167.1" cy="96.4" r="32.6" />
                      <circle class="st0" cx="259.9" cy="95.2" r="32.6" />
                      <polygon
                          points="5.5,12.4 93.6,12.4 93.6,26.5 56.9,26.5 56.9,139.8 42.2,139.8 42.2,26.8 4.8,26.8 " />
                      <polygon points="101.2,13.1 101.2,37.7 114.9,37.7 114.9,13.2 " />
                      <polygon points="101.5,52.5 114.9,52.5 114.9,140.3 101.2,140.3 " />
                      <polygon points="399.3,14.1 399.3,38.6 413,38.6 413,14.1 " />
                      <polygon points="399.5,53.4 412.9,53.4 412.9,141.2 399.2,141.2 " />
                      <path fill="white" d="M193.7,61.7c0,0-23.3-23.3-56.8,1.8l-0.1-11.1l-14.4,0.2v126.8h13.9v-50c0,0,31.4,26.1,58.4,0
                	C194.8,129.5,231.1,95.6,193.7,61.7z M188.2,116.6c0,0-20.4,21.6-43.7,0c0,0-10-9.1-7.1-24.7c2.3-11.8,11.1-21.2,22.8-24.1
                	c8.1-2,18.3-1.4,28,8C188.2,75.8,206.8,93.3,188.2,116.6z" />
                      <path fill="white" d="M267.1,53.2c-0.7,0.7-43.3-4.6-49.9,39.3c0,0-5.1,37.2,36.7,48c0,0,22.5,3.1,37-10.6v10.6h13.7V90.7
                	C304.6,90.7,303,59,267.1,53.2z M285.1,113.4c-1.6,2.4-3.6,4.5-5.9,6.2c-6.8,5.1-22.7,13.2-40.1-3c0,0-14-12.6-4.1-33.7
                	c2.4-5.2,6.5-9.4,11.6-12c8.4-4.3,22.7-8,36.2,4.9C282.7,75.8,299.7,91.8,285.1,113.4z" />
                      <path fill="white" d="M265.8,104.3l-7.1,2.6c-0.8,0.3-1.8-0.1-2-1L237,38.6c-0.4-1.2-1.7-1.8-2.8-1.2l-38.7,18.6c-1,0.5-1.8,1.3-2.3,2.2
                	l-22.8,43.8c-0.8,1.6-2.8,2.3-4.4,1.5l-4-1.9c-1.7-0.8-2.4-2.8-1.5-4.5l25.3-45.8c0.5-0.9,1.2-1.7,2-2.4l1.2-1l-4.1-12.6
                	c-0.5-1.5-1.8-2.7-3.5-2.9L171.3,31c-0.8-0.1-1.4-0.9-1.4-1.7l0-0.9c0-0.9,0.7-1.6,1.6-1.6l24.8-0.5c0.6,0,1.1,0.5,1.1,1.2l-0.1,1.1
                	c-0.1,0.8-0.7,1.5-1.5,1.6l-2,0.3c-1.9,0.8-3,3-2.9,5l2.2,8.1c0.7,0.7,1.4,1,2,0.8L235.4,25l1.2-0.6l0,0c-1.9-2.6-2-4.4-2-7.3
                	c0-4.9,4.4-8.1,9.3-8.1c4.9,0,9.1,4.1,8.7,9c-0.4,4.9-3.2,7-6.4,9.5l0,0c0,0,0,0,1,2.7l20.4,70.7
                	C267.8,102.3,267.1,103.7,265.8,104.3z" />
                      <circle class="st0" cx="243.5" cy="17.7" r="7" />
                      <polygon
                          points="298.3,52.7 313.8,52.7 342.3,118.6 372.3,52.8 387.3,52.8 330.8,180.5 315.6,180.5 335.1,135.9 " />
                  </svg>


              </div>
              <div class="menu">
                  <ul>
                      <li>
                          <div class="button-container">
                              <span class="mask">HOME</span>
                              <button type="button" name="Home">HOME</button>
                          </div>

                      </li>
                      <li>
                          <div class="button-container">
                              <span class="mask">ABOUT</span>
                              <button type="button" name="About">ABOUT</button>
                          </div>
                      </li>
                      <li>
                          <div class="button-container">
                              <span class="mask">HISTORY</span>
                              <button type="button" name="History">HISTORY</button>
                          </div>
                      </li>
                      <li>
                          <div class="button-container">
                              <span class="mask">CONTACT</span>
                              <button type="button" name="Contact">CONTACT</button>
                          </div>
                      </li>

                  </ul>
              </div>
              <div class="menu-container">
                  <div id="bar1"></div>
                  <div id="bar2"></div>
                  <div id="bar3"></div>
              </div>
          </nav>
    </nav>
  )
}

export default navbar
