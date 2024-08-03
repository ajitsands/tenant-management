import React from 'react'

function Header() {
  return (
    <div>
        
        <aside id="layout-menu" class="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
              <div class="container-xxl d-flex h-100">
                <ul class="menu-inner">
                   {/* <!-- Dashboards -->  */}
                  <li class="menu-item active">
                    <a href="/" class="menu-link ">
                      <i class="menu-icon tf-icons ri-home-smile-line"></i>
                      <div data-i18n="Dashboards">Dashboards</div>
                    </a>
                   
                  </li>

                   {/* <!-- Layouts -->  */}
                  <li class="menu-item">
                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                      <i class="menu-icon tf-icons ri-layout-2-line"></i>
                      <div data-i18n="Masters">Masters</div>
                    </a>

                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="/Building" class="menu-link">
                          <i class="menu-icon tf-icons ri-layout-4-line"></i>
                          <div data-i18n="Add Buildings">Add Buildings</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="../vertical-menu-template/" class="menu-link" target="_blank">
                          <i class="menu-icon tf-icons ri-layout-left-line"></i>
                          <div data-i18n="Vertical">Vertical</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="layouts-fluid.html" class="menu-link">
                          <i class="menu-icon tf-icons ri-layout-top-line"></i>
                          <div data-i18n="Fluid">Fluid</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="layouts-container.html" class="menu-link">
                          <i class="menu-icon tf-icons ri-layout-top-2-line"></i>
                          <div data-i18n="Container">Container</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="layouts-blank.html" class="menu-link">
                          <i class="menu-icon tf-icons ri-square-line"></i>
                          <div data-i18n="Blank">Blank</div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  
                </ul>
              </div>
            </aside>

       
    </div>
  )
}

export default Header