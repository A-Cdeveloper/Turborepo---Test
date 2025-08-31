import QueryRoute from "./queries";
import RouterLayout from "./routes";

const AppLayout = () => {
  return (
    <QueryRoute>
      <RouterLayout />
    </QueryRoute>
  );
};

export default AppLayout;
