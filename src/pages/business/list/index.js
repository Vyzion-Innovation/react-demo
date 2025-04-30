import React, { useEffect, useLayoutEffect, useState } from "react";
import { InputHeading, ListButtons, HeadingName, RoutingPaths, HeadingComponent, AddButton } from "../../../components";
import { Column, DataTable, Swal, ToastContainer, useNavigate } from "../../../libraries";
import { deleteBusinessById, getBusinessData } from "../../../components/api";

function BusinessList() {
   // MARK: variables declaration
  const [businessData, setBusinessData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();




 // MARK: Controller lifeycle
  useEffect(() => {
    fetchBusinessApi();
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    document.title = HeadingName.business.list;
  }, []);


   // MARK: Controller functions
   const businessColumnsData = [
    {
      field: "business_name",
      header: InputHeading.business.name,
      className: "table__column__capital",
    },
    { field: "email", header: InputHeading.business.email },
    { field: "phone", header: InputHeading.business.phone },
    { field: "state", header: InputHeading.business.state, className: "table__column__capital", },
    {
      field: "gstin",
      header: InputHeading.business.gst_no,
      className: "table__column_upper",
    },
    {
      field: "city",
      header: InputHeading.business.city,
      className: "table__column__capital",
    },
    {
      field: "postal_code",
      header: InputHeading.business.code,
      className: "table__column_upper",
    },
    {
      field: "street_address",
      header: InputHeading.business.address,
      className: "table__column__capital",
    },
    {
      field: "tax",
      header: InputHeading.business.tax,
      className: "table__column_upper",
    },
    {
      field: "actions",
      header: InputHeading.business.action,
      body: (data) => (
        <>
          <ListButtons
            editclick={tapOnEdit(data)}
            deleteclick={tapOnDelete(data)}
          />
          <ToastContainer />
        </>
      ),
    },
  ];

 // MARK: Controller actions
  const tapOnEdit = (businessData) => () => {
    navigate(RoutingPaths.editBusiness, { state: businessData });
  };


  const tapOnDelete = (businessData) => () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete this business data`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--red-color)",
      cancelButtonColor: "var(--secondary-color)",
      confirmButtonText: "Yes!",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        deleteBusinessApi(businessData);
      }
    });
  };


  
  // MARK: API's
  async function fetchBusinessApi() {
    const data = getBusinessData();
    setBusinessData(data);
    setLoading(false);
  }

  const deleteBusinessApi = async (business) => {
    const updatedData = deleteBusinessById(business.id);
    setBusinessData(updatedData);
  };

  if (isLoading) {
    return <div className="loading-div"> Loading ... </div>;
  }



 // MARK: UI start
  return (
    <div className="modules__main__div">
      <div className="col-12">
        <div className="card modules__card">
          <div className="modules__lists_main-content">
            <HeadingComponent
              headingName={HeadingName.business.list}
              classname="flex-grow-1"
            />
            <AddButton navigation={RoutingPaths.addBusiness} />
          </div>
          <DataTable
            className="mt-5 mb-3"
            value={businessData}
            emptyMessage="No data found."
          >
            {businessColumnsData.map((col) => (
              <Column
                key={col.field}
                field={col.field}
                header={col.header}
                bodyClassName={col.className}
                body={col.body}
              />
            ))}
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default BusinessList;
