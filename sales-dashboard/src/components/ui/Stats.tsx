import StatCard from "../cards/StatCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard
        title="Total Revenue"
        value="$81.000"
        percentage="10.6%"
        isPositive={true}
      />
      <StatCard
        title="Total Customer"
        value="5.000"
        percentage="1.5%"
        isPositive={true}
      />
      <StatCard
        title="Total Transactions"
        value="12.000"
        percentage="3.6%"
        isPositive={true}
      />
      <StatCard
        title="Total Product"
        value="5.000"
        percentage="1.5%"
        isPositive={false}
      />
    </div>
  );
}
