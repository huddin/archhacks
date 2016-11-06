%% Machine Learning 
%  Anomaly Detection and Collaborative Filtering
%     estimateGaussian.m
%     selectThreshold.m
%     cofiCostFunc.m

%% Initialization
clear ; close all; clc

%% ================== Load Dataset  ===================
%  We start by using a small dataset that is easy to
%  visualize.
%  Our example case consists of heart beats vs time

fprintf('Visualizing example dataset for outlier detection.\n\n');

%  The following command loads the datase
load('goldendata.mat');

%  Visualize the dataset
plot(X(:, 1), X(:, 2), 'bx');
axis([0 80 0 240]);
xlabel('time (s)');
ylabel('beats');

fprintf('Program paused. Press enter to continue.\n');
pause


%% ================== Estimating  dataset statistics ===================
% we assume a Gaussian distribution for the dataset.
%
%  We first estimate the parameters of our assumed Gaussian distribution, 
%  then compute the probabilities for each of the points and then visualize 
%  both the overall distribution and where each of the points falls in 
%  terms of that distribution.
%
fprintf('Visualizing Gaussian fit.\n\n');

%  Estimating mu and sigma2
[mu sigma2] = estimateGaussian(X);

%  Returns the density of the multivariate normal at each data point (row) 
%  of X
p = multivariateGaussian(X, mu, sigma2);

%  Visualize the fit
visualizeFit(X,  mu, sigma2);
xlabel('Time (s)');
ylabel('Beats');

fprintf('Program paused. Press enter to continue.\n');
pause;

%% ================== Finding Outliers ===================
%finding a good epsilon threshold using a cross-validation set
%  probabilities given the estimated Gaussian distribution
% 

pval = multivariateGaussian(Xval, mu, sigma2);

[epsilon F1] = selectThreshold(yval, pval);
fprintf('Best epsilon found using cross-validation: %e\n', epsilon);
fprintf('Best F1 on Cross Validation Set:  %f\n', F1);

%  Finding the outliers in the training set and plot the
outliers = find(p < epsilon);

%  Drawing a red circle around those outliers
hold on
plot(X(outliers, 1), X(outliers, 2), 'ro', 'LineWidth', 2, 'MarkerSize', 10);
hold off

fprintf('Program paused. Press enter to continue.\n');
pause;


%%======================== Test Data =========================

prompt = 'What is the beat per time?';
testdata = input(prompt);
p2 = multivariateGaussian(testdata, mu, sigma2);

if p2 < epsilon
   fprintf('You need a checkup!\n')
else 
    fprintf('You are healthy!\n')
end


% %% ==================Bugged! Multidimensional Outliers ===================
% %  Loads the second dataset. 
% load('ex8data2.mat');
% 
% %  Apply the same steps to the larger dataset
% [mu sigma2] = estimateGaussian(X);
% 
% %  Training set 
% p = multivariateGaussian(X, mu, sigma2);
% 
% %  Cross-validation set
% pval = multivariateGaussian(Xval, mu, sigma2);
% 
% %  Find the best threshold
% [epsilon F1] = selectThreshold(yval, pval);
% 
% fprintf('Best epsilon found using cross-validation: %e\n', epsilon);
% fprintf('Best F1 on Cross Validation Set:  %f\n', F1);
% fprintf('# Outliers found: %d\n', sum(p < epsilon));
% pause



