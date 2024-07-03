import React from 'react'; // Importer React
import './pageTitle.css'; // Importer les styles CSS


function PageTitle({ pag }) {
  return (
    <div className="pagetitle">
      <h1>{pag}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                      <h5 className="font-weight-bolder">
                        2,300
                      </h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder">+3%</span>
                        since last week
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                      <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
  <div className="card">
    <div className="card-body p-3">
      <div className="row">
        <div className="col-8">
          <div className="numbers">
            <p className="text-sm mb-0 text-uppercase font-weight-bold">New Orders</p>
            <h5 className="font-weight-bolder">
              85
            </h5>
            <p className="mb-0">
              <span className="text-warning text-sm font-weight-bolder">+10%</span>
              since last week
            </p>
          </div>
        </div>
        <div className="col-4 text-end">
          <div className="icon icon-shape bg-gradient-info shadow-info text-center rounded-circle">
            <i className="ni ni-bag-17 text-lg opacity-10" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
  <div className="card">
    <div className="card-body p-3">
      <div className="row">
        <div className="col-8">
          <div className="numbers">
            <p className="text-sm mb-0 text-uppercase font-weight-bold">Monthly Revenue</p>
            <h5 className="font-weight-bolder">
              $28,500
            </h5>
            <p className="mb-0">
              <span className="text-danger text-sm font-weight-bolder">-5%</span>
              since last month
            </p>
          </div>
        </div>
        <div className="col-4 text-end">
          <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
            <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Répétez la structure ci-dessus pour d'autres cartes */}
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">New Products</p>
                      <h5 className="font-weight-bolder">
                        120
                      </h5>
                      <p className="mb-0">
                        <span className="text-info text-sm font-weight-bolder">+20%</span>
                        since last month
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                      <i className="ni ni-basket text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default PageTitle;
