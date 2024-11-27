import React, { useState } from "react";

const CreateFoodModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setFile(null); // Clear file input when closing the modal
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const uploadFileToCloudinary = async () => {
    if (!file) {
      alert("Please select a file before continuing.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "food");

    try {
      const response = await fetch(
        "https://442443716655428:G5GWORHcpvJScgDt97ap4YA3B7I@df1bobxmm/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("File upload failed.");
      }

      const data: { secure_url: string } = await response.json();
      console.log("Uploaded file URL:", data.secure_url);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    }
  };

  return (
    <>
      <label htmlFor="create-food-modal" className="btn" onClick={handleOpen}>
        Create food
      </label>

      <input
        type="checkbox"
        id="create-food-modal"
        className="modal-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create food</h3>

          <form className="space-y-4">
            {/* Other inputs */}
            <div>
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={handleFileChange}
              />
            </div>
          </form>

          <div className="modal-action">
            <label
              htmlFor="create-food-modal"
              className="btn"
              onClick={handleClose}
            >
              Clear
            </label>
            <button
              type="button"
              className="btn btn-neutral"
              onClick={uploadFileToCloudinary}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateFoodModal;
