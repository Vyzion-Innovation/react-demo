import React, { useEffect, useLayoutEffect, useState } from "react";
import { InputHeading, ListButtons, HeadingName, RoutingPaths, ToastMessages, HeadingComponent, AddButton } from "../../../components";
import { Column, DataTable, Swal, toast, ToastContainer, useNavigate } from "../../../libraries";

function BusinessList() {
  const [businessData, setBusinessData] = useState([]);
  const [countryData, setCountryData] = useState([])
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);


  // MARK: Use Effect Method
  useEffect(() => {
    fetchBusinessApi();
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  // MARK: use layout effect function
  useLayoutEffect(() => {
    document.title = HeadingName.business.list;
  }, []);


  // MARK: fetch business API
  async function fetchBusinessApi() {
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      // const data = await fetchBusinessDetails(token);
      setLoading(false)
      // setBusinessData(data);
    } catch (error) {
      toast.error(error);
      <ToastContainer />

      setLoading(false);
    }
  }



  const countryName = (countries) => {
    var countryObject = countryData.find(function (country) {
      return country.id === countries.country.id;
    });
    return `${countryObject?.name}`;
  };

  // MARK: Edit data function
  const tapOnEdit = (businessData) => () => {
    navigate(RoutingPaths.editBusiness, { state: businessData });
  };

  // MARK: Delete data function
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

  // MARK: delete API
  const deleteBusinessApi = async (business) => {
    const token = localStorage.getItem("token");

    try {
      // await deleteBusinessDetails(business.id, token);
      setBusinessData(prevState => prevState.filter(item => item.id !== business.id));
      toast.success(ToastMessages.businessDelete);
      <ToastContainer />

    } catch (error) {
      toast.error(error);
      <ToastContainer />
    }

  };


  // MARK: business columns data
  const businessColumnsData = [
    {
      field: "business_name",
      header: InputHeading.business.name,
      className: "table__column__capital",
    },
    { field: "email", header: InputHeading.business.email },
    { field: "phone", header: InputHeading.business.phone },
    { field: "country", header: InputHeading.business.country, CardBody: countryName },
    { field: "state", header: InputHeading.business.state, className: "table__column__capital", },
    {
      field: "city",
      header: InputHeading.business.city,
      className: "table__column__capital",
    },
    {
      field: "postal_code",
      header: InputHeading.business.code,
    },
    {
      field: "actions",
      header: InputHeading.list.action,
      CardBody: (data) => (
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

  if (isLoading) {
    return <div className="loading-div"> Loading ... </div>;
  }

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
            header={undefined}
            emptyMessage="No data found."
          >
            {businessColumnsData.map((col) => (
              <Column
                key={col.field}
                field={col.field}
                header={col.header}
                bodyClassName={col.className}
                body={col.CardBody}
              />
            ))}
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default BusinessList;
