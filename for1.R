pollutantmean <- function(directory="specdata", pollutant="sulfate", id = 1:1) {
  ## 'directory' is a character vector of length 1 indicating
  ## the location of the CSV files
  
  ## 'pollutant' is a character vector of length 1 indicating
  ## the name of the pollutant for which we will calculate the
  ## mean; either "sulfate" or "nitrate".
  
  ## 'id' is an integer vector indicating the monitor ID numbers
  ## to be used
  
  ## Return the mean of the pollutant across all monitors list
  ## in the 'id' vector (ignoring NA values)
  path <- paste(getwd(), "/specdata", sep="")
  ##list.files(path)
  
  i <- 1
  notNAVec = c()
  currentPath <- getwd()
  fileName <- ""
  pollutantVec <- c()
  
  ##for (i in id)
  ##{
    length <- nchar(i)
    if (length==1)
      
    {
      fileName <- paste(currentPath,"/","specdata","/",'00',i,".csv",sep="")
    }
    else if (length==2)
    {
      fileName <-paste(currentPath,"/","specdata","/","0",i,".csv",sep="")
    }
    
    else 
    {
      fileName <- paste(currentPath,"/","specdata","/",i,".csv",sep="")
    }
    fileName
    
    data <- read.csv(fileName,header=TRUE)
  apply()
    
    
    
    subsetData <- data$pollutant
    
    pollutantVec <- c(pollutantVec, subsetData )
  
  mean <- mean(!is.na(pollutantVec))
  mean
}

