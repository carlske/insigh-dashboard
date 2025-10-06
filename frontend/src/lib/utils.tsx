export const exportData = (data: any, filename: string, typeForm: string) => {
  const blob = new Blob([data], { type: typeForm });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
};
