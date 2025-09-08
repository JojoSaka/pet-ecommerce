"use client";

import config from "@/lib/config";
import { ImageKitProvider, IKUpload} from "imagekitio-next";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";

type IKUploadResponse = {
  fileId: string;
  name: string;
  url: string;
  filePath: string;
  height?: number;
  width?: number;
  thumbnailUrl?: string;
  size?: number;
  fileType?: string;
};

const {
  env: {
    imageKit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch("/api/imagekit");

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();

    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
    throw new Error("Authentication request failed: Unknown error");
  }
};

const FileUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const ikUploadRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<IKUploadResponse | null>(null);
  const [progress, setProgress] = useState(0);

  const onError = (error: unknown) => {
    if (error instanceof Error) {
      throw new Error(`Image upload failed: ${error.message}`);
    }
    throw new Error("Image upload failed");
  };

  const onSuccess = (res: IKUploadResponse) => {
    setFile(res);
    onFileChange(res.url);

    toast("Image upload successful", {
      style: {
        background: "#A0522D",
        color: "#fff",
      },
      className:
        "rounded-lg shadow-md font-medium text-xl border-none outline-none",
    });
  };

  const onValidate = (file: File) => {
    // if (type === "image") {
    if (file.size > 20 * 1024 * 1024) {
      toast(
        "File size is too large. Please upload a file that is less than 20MB in size."
      );

      return false;
    }
    // } else if (type === "video") {
    //   if (file.size > 50 * 1024 * 1024) {
    //     toast({
    //       title: "File size too large",
    //       description: "Please upload a file that is less than 50MB in size",
    //       variant: "destructive",
    //     });
    //     return false;
    //   }
    // }

    return true;
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        validateFile={onValidate}
        onUploadStart={() => setProgress(0)}
        onUploadProgress={({ loaded, total }) => {
          const percent = Math.round((loaded / total) * 100);

          setProgress(percent);
        }}
        className="hidden"
      />
      <button
        className="flex min-h-[3.5rem] w-full items-center justify-center gap-1.5 rounded-md bg-[#f8f6f3] border-gray-100 border"
        onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />
        {/* <p className={cn("text-base", styles.placeholder)}>{placeholder}</p> */}
        <p className="text-base text-light-100">Upload your image file</p>
      </button>

      {file && (
        <p className="text-center upload-filename">
          File Uploaded: {file.filePath}
        </p>
      )}

      {progress > 0 && progress !== 100 && (
        <div className="w-full rounded-full bg-green-200">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}
    </ImageKitProvider>
  );
};

export default FileUpload;
