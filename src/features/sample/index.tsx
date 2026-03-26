import { useQuery } from "@tanstack/react-query";
import { Table, Spin } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getSampleList } from "./sample.api";
import styles from "./sample.module.scss";
import type { SampleItem } from "./sample.type";

const SamplePage = () => {
  const { data, isLoading, isError, error } = useQuery<SampleItem[]>({
    queryKey: ["sample-list"],
    queryFn: getSampleList,
  });

  const columns: ColumnsType<SampleItem> = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
  ];

  if (isLoading) return <Spin />;

  if (isError) {
    return <div>{error instanceof Error ? error.message : "Error"}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Sample List</div>

      <Table<SampleItem>
        rowKey="id"
        dataSource={data || []}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default SamplePage;
