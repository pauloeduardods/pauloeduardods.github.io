#!/bin/bash

echo "Check if directory exists"

DIR="/home/ec2-user/pauloeduardods"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
  echo "Create a backup of the directory"
  echo "Check if backup directory exists"

  BAK_DIR="/home/ec2-user/backup"
  if [ -d "$BAK_DIR" ]; then
    echo "${BAK_DIR} exists"
  else
    echo "Creating ${BAK_DIR} directory"
    mkdir ${BAK_DIR}
  fi

  echo "Backuping ${DIR} to ${BAK_DIR}"

  BACKUP_FILE="${BAK_DIR}/pauloeduardods_$(date +%Y-%m-%d-%Hh%Mm)"
  cp -rf ${DIR} ${BACKUP_FILE}

  echo "Backup created on: ${BACKUP_FILE}"

  echo "Removing the 4th oldest directory"

  cd ${BAK_DIR}
  OLDEST=$(ls -t | tail -n +4)
  rm -rf ${OLDEST}

  echo "${OLDEST} removed"

else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi