import "../subhead.css";

const SubHeader = ({ title }) => {
  return (
    <div className="sub-header">
      <div className="breadcrumb">
        หน้าหลัก &gt; <span>{title}</span>
      </div>

      <h1 className="page-title">{title}</h1>
    </div>
  );
};

export default SubHeader;