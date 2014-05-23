pollutantmean <- function(directory, pollutant, id = 1:332) {
  ## 'directory' is a character vector of length 1 indicating
  ## the location of the CSV files
  
  ## 'pollutant' is a character vector of length 1 indicating
  ## the name of the pollutant for which we will calculate the
  ## mean; either "sulfate" or "nitrate".
  
  ## 'id' is an integer vector indicating the monitor ID numbers
  ## to be used
  
  ## Return the mean of the pollutant across all monitors list
  ## in the 'id' vector (ignoring NA values)
  
  ##list.files(path)
 
 pollutantData <- data.frame()
  for (i in id)
  {
    length <- nchar(i)
    if (length==1)

  {
      fileName <- paste(getwd(),"/",directory,"/",'00',i,".csv",sep="")
    }
else if (length==2)
{
  fileName <-paste(getwd(),"/",directory,"/","0",i,".csv",sep="")
}

else 
  {
    fileName <- paste(getwd(),"/",directory,"/",i,".csv",sep="")
   }


    fileName

    data <- read.csv(fileName,header=TRUE)
 
   pollutantData <- rbind(pollutantData,data)

}
  
mean(as.matrix(pollutantData[pollutant]),na.rm=TRUE)
}

