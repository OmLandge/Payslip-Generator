-- CreateTable
CREATE TABLE "Users" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uan_no" BIGINT,
    "esi_no" BIGINT,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Company" (
    "cId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("cId")
);

-- CreateTable
CREATE TABLE "Payments" (
    "pId" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "basicDa" INTEGER NOT NULL,
    "pf" INTEGER NOT NULL,
    "ptax" INTEGER NOT NULL,
    "hra" INTEGER NOT NULL,
    "otAmount" INTEGER NOT NULL,
    "UniformPurchaseReimbursement" INTEGER NOT NULL,
    "advance" INTEGER NOT NULL,
    "UniformWashingReimbursement" INTEGER NOT NULL,
    "mlwf" INTEGER NOT NULL,
    "ChildEducationCess" INTEGER NOT NULL,
    "MediclaimPolicy" INTEGER NOT NULL,
    "cca" INTEGER NOT NULL,
    "tds" INTEGER NOT NULL,
    "arrears" INTEGER NOT NULL,
    "otherDeduction" INTEGER NOT NULL,
    "gross" INTEGER NOT NULL,
    "totalDeduction" INTEGER NOT NULL,
    "netAmount" INTEGER NOT NULL,
    "Month" TEXT NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("pId")
);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("cId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("cId") ON DELETE RESTRICT ON UPDATE CASCADE;
