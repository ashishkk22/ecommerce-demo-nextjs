const CentralLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondary/30 bg-opacity-50 z-50">
      <div className="w-12 h-12 border-4 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default CentralLoader;
