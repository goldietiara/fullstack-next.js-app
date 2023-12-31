import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const CreateProject = async () => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");

  return (
    <div>
      <Modal>
        <h1 className=" fixed align-middle text-center text-2xl font-semibold p-6">
          New Project
        </h1>
        <ProjectForm type="create" session={session}></ProjectForm>
      </Modal>
    </div>
  );
};

export default CreateProject;
